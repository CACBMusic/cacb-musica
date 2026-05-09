import LoginForm from "./ui/login-form";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-32 text-white">
      <div className="mx-auto max-w-md">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-orange-400">
            CACB Música
          </p>

          <h1 className="mt-4 text-5xl font-black">
            Login
          </h1>
        </div>

        <LoginForm />
      </div>
    </main>
  );
}