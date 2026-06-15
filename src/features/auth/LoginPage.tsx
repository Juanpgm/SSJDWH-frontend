import { Navigate } from "react-router-dom";
import { Card, Button } from "@tremor/react";
import { useAuth } from "../../app/providers/auth";

export default function LoginPage() {
  const { user, signInWithGoogle } = useAuth();

  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-sm">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-900">SyJDWH</h1>
          <p className="mt-1 text-sm text-gray-500">
            Plataforma de Analítica
          </p>
        </div>
        <Button
          className="w-full"
          onClick={signInWithGoogle}
        >
          Iniciar sesión con Google
        </Button>
      </Card>
    </div>
  );
}
