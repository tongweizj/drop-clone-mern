import { Link } from 'react-router-dom';
const ProductCard = ({ item }) => {
    return (
        <div className="w-full grid grid-cols-12 overflow-hidden shadow-sm bg-white items-center">
            <div className="col-span-3 h-[200px]">
                <div className="w-full flex-grow overflow-hidden bg-gray-100  rounded-sm">
                    <img
                        src={`/${item.images[0]}`}
                        alt="产品图"
                        className="w-full aspect-square object-cover"
                    />
                </div></div>
            <div className="col-span-7 px-6 flex flex-col gap-2">
                <h3 className="text-xl font-bold text-gray-900"><span className="text-2xl sm:text-sm font-bold text-gray-800 truncate">
                    {item.title}
                </span></h3>
                <p className="text-sm text-gray-500">分类：电子产品 / 外设</p>
                <p className="text-sm text-gray-600 line-clamp-1">描述：这是一段关于产品的详细描述信息，展示基本情况。</p>
                <div className="flex gap-4 mt-1">
                    <span className="text-blue-600 font-semibold">价格：${item.price}</span>
                    <span className="text-green-600 text-sm">库存：充足</span>
                </div>
            </div>
            <div className="col-span-2 flex flex-row gap-3 px-4">
                <Link to={`/product/${item._id}`} target="_blank">
                    浏览
                </Link>
                <Link to={`/admin/products/${item._id}`} >
                    编辑
                </Link>
                <Link to={`/products/${item._id}`} target="_blank">
                    删除
                </Link>
            </div>

        </div>
    )
};
export default ProductCard;