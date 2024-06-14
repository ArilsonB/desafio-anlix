import { http } from "@/lib/http";

export const useExportPatientIndexes = () => {
  return {
    exportData: (patients: string[]) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", `${http.defaults.baseURL}/index/export-csv`, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.responseType = "blob";

      xhr.onload = function () {
        if (xhr.status === 200) {
          const blob = new Blob([xhr.response], { type: "text/csv" });
          const link = document.createElement("a");
          link.href = window.URL.createObjectURL(blob);
          link.download = "data.csv";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          console.error("Failed to download file:", xhr.statusText);
        }
      };

      xhr.onerror = function () {
        console.error("Network error.");
      };

      xhr.send(
        JSON.stringify({
          patients,
        })
      );
    },
  };
};
