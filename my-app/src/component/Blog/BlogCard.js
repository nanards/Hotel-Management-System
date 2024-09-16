import React from "react"
import { Link } from "react-router-dom"

const BlogCard = ({ item: { id, date, catgeory, title, cover, para, para1, para3, para5, para7, para9, para11, para15, para13, desc } }) => {
  return (
    <>
      <div className='items'>
        <div className='img'>
          <img src={cover} alt='' />
        </div>

        <div className='category flex_space'>
          <span>{date}</span>
          <label>{catgeory}</label>
        </div>

        <div className='details'>
          <h3>{title}</h3>
          <p>{para}</p>
          <p>{para1}</p>
          <p>{para3}</p>
          <p>{para5}</p>
          <p>{para7}</p>
          <p>{para9}</p>
          <p>{para11}</p>
          <p>{para13}</p>
          <p>{para15}</p>
        </div>

        <Link to={`/blogsingle/${id}`} className='blogItem-link'>
          READ MORE <i className='fa fa-long-arrow-right'></i>
        </Link>
      </div>
    </>
  )
}

export default BlogCard