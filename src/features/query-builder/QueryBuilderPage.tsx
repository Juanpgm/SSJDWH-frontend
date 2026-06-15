import { Card, Title, Text } from "@tremor/react";

export default function QueryBuilderPage() {
  return (
    <div className="space-y-6">
      <div>
        <Title>Query Builder</Title>
        <Text>Constructor visual de consultas SQL. Próximamente.</Text>
      </div>

      <Card>
        <Text className="text-gray-400">
          Seleccioná tablas y columnas para construir tu consulta.
        </Text>
      </Card>
    </div>
  );
}
