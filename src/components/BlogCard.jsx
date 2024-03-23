/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import placeHolderImage from '../assets/404.jpg'
import { MdDeleteForever } from "react-icons/md";

const BlogCard = ({blog, deletable, handleDelete}) => {
    const {cover_image, title, description, id, published_at} = blog

    return (
        <div className="flex relative">
            <Link to={`/blog/${id}`} 
        className="max-w-sm mx-auto group transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 hover:no-underline focus:no-underline dark:bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || placeHolderImage} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
					<span className="text-xs dark:text-gray-600">{new Date(published_at).toLocaleDateString()}</span>
					<p>{description}</p>
				</div>
			</Link>
            {
                deletable && <div onClick={() => handleDelete(id)} className="absolute bg-primary hover:bg-secondary ml-5 p-3 rounded-full hover:scale-105 group cursor-pointer -top-5 -right-5"><MdDeleteForever 
                size={15}
                className="text-secondary group-hover:text-primary"></MdDeleteForever></div>
            }
        </div>
    );
};

export default BlogCard;