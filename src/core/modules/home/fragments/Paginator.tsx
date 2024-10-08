export default function Paginator(){
return (
<div className="flex my-2 w-full justify-center">
  <a className="flex items-center cursor-pointer justify-center px-5 h-10 text-base font-medium terx rounded-lg hover:bg-gray-100 hover:text-gray-700 bg-gray-800 border-gray-700 text-white">
    Anterior
  </a>

  <a className="flex items-center cursor-pointer justify-center px-5 h-10 ms-3 text-base font-medium terx rounded-lg hover:bg-gray-100 hover:text-gray-700 bg-gray-800 border-gray-700 text-white ">
    Próximo
  </a>
</div>
)
}