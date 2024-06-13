import React from "react";

type PatientsTableProps = {
  prop?: string;
};

const PatientsTable: React.FC<PatientsTableProps> = (
  props: PatientsTableProps
): JSX.Element => {
  const { prop } = props;

  return <div>{prop}</div>;
};

export default PatientsTable;
