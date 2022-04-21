export function Suggestion() {
    return (
        <section class="flex justify-center mt-2 mr-80">
            <div id="stories"
                class="container border border-gray-300 p-4 flex space-x-2 overflow-auto max-w-2xl h-fit rounded mt-20 bg-white">

                <div id="story" class="flex flex-col items-center">
                    <div class="bg-gray-200 w-14 h-14 rounded-full outline outline-offset-4 outline-gray-200"></div>
                    <p class="text-xs mt-3">gabrielpelincel</p>
                </div>

            </div>

            <div id="follow-suggestions" class="p-4 text-sm ml-3 fixed inset-y-20 right-72 mx-auto">
                <div id="user" class="flex items-center">
                    <div class="bg-gray-200 w-14 h-14 rounded-full"></div>
                    <div id="name" class="flex flex-col ml-2">
                        <p>gabrielpelincel</p>
                        <p class="text-slate-400">Gabriel :)</p>
                    </div>
                    <a href="#" class="ml-20 text-blue-500 font-semibold">Mudar</a>
                </div>

                <div class="flex mt-5 mb-2">
                    <p class="font-semibold text-slate-400">Sugestões para você</p>
                    <p class="text-xs ml-auto font-semibold">Ver tudo</p>
                </div>

                <div class="space-y-2">
                    <div id="suggestion" class="flex items-center">
                        <div class="bg-gray-200 w-10 h-10 rounded-full"></div>
                        <div id="name" class="flex flex-col ml-2">
                            <p class="text-sm">gabrielpelincel</p>
                            <p class="text-xs text-slate-400">Seguido por...</p>
                        </div>
                        <a href="#" class="ml-20 text-blue-500 font-semibold">Seguir</a>
                    </div>
                    <div id="developed-by">
                        <small class="text-slate-400">Site desenvolvido por Gabriel Pelincel Ramalho</small>
                    </div>
                </div>
            </div>
        </section>
    );
}