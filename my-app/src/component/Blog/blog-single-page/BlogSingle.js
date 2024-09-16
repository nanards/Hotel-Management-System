import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import BlogData from "../BlogData"
import EmptyFile from "../../../common/EmptyFile/EmptyFile"
import HeadTitle from "../../../common/HeadTitle/HeadTitle"
import { useParams } from "react-router-dom"

const BlogSingle = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    let item = BlogData.find((item) => item.id === parseInt(id))
    if (item) {
      setItem(item)
    }
  }, [id])
  return (
    <>
      <HeadTitle />

      {item ? (
        <section className='single-page top'>
          <div className='container'>
            <Link to='/blog' className='primary-btn back'>
              <i className='fas fa-long-arrow-alt-left'></i> Go Back
            </Link>

            <article className='content flex_space'>
              <div className='main-content'>
                <img src={item.cover} alt='' />

                <div className='category flex_space'>
                  <span>{item.date}</span>
                  <label>{item.catgeory}</label>
                </div>

                <h1> {item.title} </h1>
                <p>{item.para1}</p>
                <p>{item.para}</p>
                <p>{item.para3}</p>
                <p>{item.para5}</p>
                <p>{item.para7}</p>
                <p>{item.para9}</p>
                <p>{item.para13}</p>
                <p>{item.para15}</p>
                <p>{item.para11}</p>

                <div className='para flex_space'>
                  <p>{item.desc}</p>
                  <p>{item.desc4}</p>
                  <p>{item.desc2}</p>
                  <p>{item.desc6}</p>
                  <p>{item.desc8}</p>
                  <p>{item.desc10}</p>
                  <p>{item.desc14}</p>
                  <p>{item.desc16}</p>
                  <p>{item.desc12}</p>
                  
                </div>
              </div>

              <div className='side-content'>
                <div className='category-list'>
                  <h1>Categories</h1>
                  <hr />
                  <ul>
                    {BlogData.map((item) => {
                      return (
                        <li>
                          <i className='far fa-play-circle'></i>
                          {item.catgeory}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>

            </article>
          </div>
        </section>
      ) : (
        <EmptyFile />
      )}
    </>
  )
}

export default BlogSingle