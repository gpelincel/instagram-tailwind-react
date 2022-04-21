export function Suggestion() {
    return (
        <div id="suggestion" class="flex items-center">
                    <div class="bg-gray-200 w-10 h-10 rounded-full"></div>
                    <div id="name" class="flex flex-col ml-2">
                        <p class="text-sm">gabrielpelincel</p>
                        <p class="text-xs text-slate-400">Seguido por...</p>
                    </div>
                    <a href="#" class="ml-20 text-blue-500 font-semibold">Seguir</a>
        </div>
    );
}