export default function Paginator(){
return (
<div className="flex my-2 w-full justify-center">
  <a className="flex items-center cursor-pointer justify-center px-5 h-10 text-base font-medium terx bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-900 dark:hover:text-white">
    Anterior
  </a>

  <a className="flex items-center cursor-pointer justify-center px-5 h-10 ms-3 text-base font-medium terx bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-900 dark:hover:text-white">
    Próximo
  </a>
</div>
)
}