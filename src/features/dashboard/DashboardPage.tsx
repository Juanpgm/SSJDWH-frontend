import { Card, Title, Text } from "@tremor/react";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <Title>Dashboard</Title>
        <Text>Resumen de la plataforma de analítica.</Text>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <Text>Tablas disponibles</Text>
          <p className="mt-2 text-3xl font-bold text-gray-900">141</p>
        </Card>
        <Card>
          <Text>Estado API</Text>
          <p className="mt-2 text-3xl font-bold text-green-600">Online</p>
        </Card>
        <Card>
          <Text>Usuarios activos</Text>
          <p className="mt-2 text-3xl font-bold text-gray-900">—</p>
        </Card>
      </div>
    </div>
  );
}
