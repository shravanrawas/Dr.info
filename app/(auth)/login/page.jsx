import React from "react";
import LoginForm from "./_components/LoginForm";
import BrandingSection from "./_components/BrandingSection";


const LoginPage = () => {
  return (
    <main className="overflow-hidden rounded-xl shadow-[0px_0px_65px_rgba(0,0,0,0.25)]">
      <div className="w-full rounded-xl bg-indigo-50 bg-opacity-70 max-md:max-w-full">
        <div className="px-4 py-3.5 w-full max-md:pr-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <BrandingSection />
            <section className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <LoginForm />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
