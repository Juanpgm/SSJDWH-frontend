import { useEffect, useState } from "react";
import { Card, Title, Text, Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Badge } from "@tremor/react";
import { api } from "../../services/api";

interface TableInfo {
  table_name: string;
  table_type: string;
}

export default function TablesPage() {
  const [tables, setTables] = useState<TableInfo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get<{ tables: TableInfo[] }>("/tables")
      .then((data) => setTables(data.tables))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Text>Cargando tablas...</Text>;
  }

  return (
    <div className="space-y-6">
      <div>
        <Title>Explorador de Tablas</Title>
        <Text>{tables.length} tablas disponibles en la base de datos.</Text>
      </div>

      <Card>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Tabla</TableHeaderCell>
              <TableHeaderCell>Tipo</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tables.map((t) => (
              <TableRow key={t.table_name}>
                <TableCell className="font-medium">{t.table_name}</TableCell>
                <TableCell>
                  <Badge color={t.table_type === "VIEW" ? "orange" : "blue"}>
                    {t.table_type === "VIEW" ? "Vista" : "Tabla"}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
