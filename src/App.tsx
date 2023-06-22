import router from "@/router";
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import i18n from "@/i18n";
import { useAppSelector } from "@/hooks/redux";
import { getLanguage } from "@/redux/app/appSelector";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function App(): JSX.Element {
  const language = useAppSelector(getLanguage);

  useEffect(() => {
    void i18n.changeLanguage(language);
  }, [language]);
  const queryClient = new QueryClient();
  return (
    <div className="min-h-screen w-full">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </div>
  );
}
