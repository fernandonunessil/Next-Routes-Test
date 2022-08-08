function About() {
  return (
    <div>
      <div className="w-full h-14 bg-black flex items-center justify-between border-b border-white">
        <div>
          <h1 className="text-3xl text-white font-bold pl-6">Next Project</h1>
        </div>
        <div className="text-white pr-6">
          <ul className="flex gap-5">
            <li><a href="/">Home</a></li>
            <li><a href="/form-contact">Form Contat</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>
      </div>

      <div className="h-full w-full bg-zinc-900">
        <div className="text-justify text-white font-normal flex items-center justify-center">
          <div className="p-28 w-2/3 font-semibold text-lg">
            <p>
              Cras ut aliquam quam. Nam finibus, leo sit amet hendrerit
              malesuada, diam purus porta odio, eu porta lorem lorem id ligula.
              Maecenas viverra pulvinar consequat. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos.
              Vivamus blandit enim ac lorem facilisis, rutrum consequat sapien
              vestibulum. Donec eu lacinia libero, at sodales metus. Phasellus
              ornare quam nisi, ac fringilla lacus egestas viverra. Donec
              consectetur luctus aliquam. Pellentesque maximus sed nisi et
              varius. Praesent sit amet nibh placerat nunc interdum egestas sit
              amet ac ligula. Pellentesque sit amet aliquam metus. Etiam ex
              ante, varius hendrerit pulvinar at, suscipit at dui. In hac
              habitasse platea dictumst. Quisque euismod metus ac nulla maximus
              viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nam iaculis eu elit eu feugiat.
            </p>
          </div>
          <div>
            <img src={"https://www.alura.com.br/assets/api/cursos/512/next-js-iniciando-framework.png"} alt='next image' className='w-96'/>
          </div>
        </div>
        <div className="text-justify text-white font-normal flex items-center justify-center">
          <div className="p-28 w-2/3 font-semibold text-lg order-2">
            <p>
              Cras ut aliquam quam. Nam finibus, leo sit amet hendrerit
              malesuada, diam purus porta odio, eu porta lorem lorem id ligula.
              Maecenas viverra pulvinar consequat. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos.
              Vivamus blandit enim ac lorem facilisis, rutrum consequat sapien
              vestibulum. Donec eu lacinia libero, at sodales metus. Phasellus
              ornare quam nisi, ac fringilla lacus egestas viverra. Donec
              consectetur luctus aliquam. Pellentesque maximus sed nisi et
              varius. Praesent sit amet nibh placerat nunc interdum egestas sit
              amet ac ligula. Pellentesque sit amet aliquam metus. Etiam ex
              ante, varius hendrerit pulvinar at, suscipit at dui. In hac
              habitasse platea dictumst. Quisque euismod metus ac nulla maximus
              viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nam iaculis eu elit eu feugiat.
            </p>
          </div>
          <div className='order-1'>
            <img src={"https://www.alura.com.br/assets/api/cursos/512/next-js-iniciando-framework.png"} alt='next image' className='w-96'/>
          </div>
        </div>
      </div>
      {/*Section*/}

      <div className='w-full h-14 bg-black border-t border-white text-center text-white grid items-center'>
        <p>Fernando Nunes</p>
        <a href="https://github.com/fernandonunessil" target="_blank">Github Profile</a>
      </div>
      {/*Footer*/}
    </div>
  );
}

export default About;
