import Image from "next/image";
import React from "react";
import logo from "../../public/logo.png";
import EditHome from "@/components/EditHome";
import EditProjetos from "@/components/EditProjetos";
import EditQuemSomos from "@/components/EditQuemSomos";
import EditCases from "@/components/EditCases";
import EditProdutos from "@/components/EditProdutos";
import EditPortfolio from "@/components/EditPortfolio";
import EditDepoimentos from "@/components/EditDepoimentos";
import { useAuth } from "@/utils/auth";
export default function Admin() {
useAuth();
  return (
    <div>
      <main className="flex flex-col ">
        <div className="pt-20 pb-10 flex flex-col items-center justify-center gap-4 bg-zinc-500">
          <h1 className="tracking-widest text-lg text-center text-white">
            Painel de edições
          </h1>
          <Image src={logo} alt="logo" className="w-1/2 md:w-1/4" />
        </div>
        {/* HOME */}
        <EditHome />
        {/* Projetos */}
        <EditProjetos />
        {/* Quem Somos */}
        <EditQuemSomos />
        {/* Cases de sucesso */}

        <EditCases />
        {/* Produtos */}

        <EditProdutos />
        {/* Portfólio */}
        <EditPortfolio />

        {/* Depoimentos */}
        <EditDepoimentos />
      </main>
    </div>
  );
}
