export function AboutPage() {
  return (
    <div className=" flex justify-start items-start bg-gradient-to-b from-gradient-200 from-0 via-gradient-300 to-gradient-400 w-full flex items-start flex-col max-h-full min-h-screen ">
      <div className='mt-32 gap-8 flex flex-col w-full '>
        <span className='w-36 ml-12  bg-clip-text text-transparent text-5xl font-bold bg-gradient-to-r from-title-first-color-100 via-title-second-color-100 to-title-third-color-100 '>
        Sobre
        </span>
        <p className='text-gray-50 ml-12 w-4/6'>
            Esse é um projeto teste proporcionado pela <a className='underline font-medium' href="https://www.hrzon.com.br/" target="blank">Horizon</a> onde o objetivo era construir uma aplicação consumindo os dados da API do Spotify e 
            mostrar informações a respeito de álbuns, faixas...
        </p>
      </div>
    </div>
  );
}

