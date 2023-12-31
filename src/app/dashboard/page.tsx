'client side'
import Link from "next/link";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
return (
<div>
    <nav className="bg-red-100 p-4 flex justify-between items-center shadow-lg">
        <Link href="/"> 
            <div className="text-slate-800 text-2xl font-bold">BookShelf</div>
        </Link>
        <ul className="flex gap-4 text-slate-700">
            <li>
                <Link href="/Login">
                    <div className="hover:text-secondary transition-colors duration-200 font-bold">Logout</div>
                </Link>
            </li>
        </ul>
    </nav>

    <section className="flex flex-col gap-5 p-4">
        <button>
            <button className="bg-secondary text-slate-800 px-4 py-2 rounded font-semibold hover:bg-secondary/80 transition-all duration-100 ease-in-out shadow-md flex">
                Add New Book
            </button>
        </button>
        <div className="overflow-x-auto shadow rounded-lg bg-white dark:bg-gray-800 p-4">
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Book</th>
                        <th className="px-4 py-2">Author</th>
                        <th className="px-4 py-2">Edit</th>
                    </tr>
                </thead>
                <tbody className="divide-y">
                    <tr>
                        <td className="px-4 py-2">Harry Potter</td>
                        <td className="px-4 py-2">J.K. Rowling</td>
                        <td className="px-4 py-2 flex gap-3">
                            <Link href="/edit">
                                <span className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-2">Edit</span>
                            </Link>
                            <Link href="#">
                                <span className="font-medium text-red-600 hover:underline dark:text-red-500">Delete</span>
                            </Link> 
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</div>

);
};

export default Dashboard;
