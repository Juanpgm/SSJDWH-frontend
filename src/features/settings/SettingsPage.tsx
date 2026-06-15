import { Card, Title, Text } from "@tremor/react";
import { useAuth } from "../../app/providers/auth";

export default function SettingsPage() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div>
        <Title>Configuración</Title>
        <Text>Tu perfil y preferencias.</Text>
      </div>

      <Card>
        <div className="flex items-center gap-4">
          <img
            src={user?.photoURL || ""}
            alt=""
            className="h-16 w-16 rounded-full"
          />
          <div>
            <p className="text-lg font-medium text-gray-900">
              {user?.displayName || "Usuario"}
            </p>
            <p className="text-sm text-gray-500">{user?.email}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
