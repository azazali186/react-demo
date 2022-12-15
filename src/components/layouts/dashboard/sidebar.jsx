import React, { useEffect, useState } from 'react'
import routes from '../../../routes/routes'
import { Link } from 'react-router-dom'
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import logoImage from '../../../common/assets/img/logo.jpg'


const menuName = ""

const Sidebar = () => {
  return (
    <div className='flex w-64 h-[95vh] bg-red-700 text-white'>
      <MainSideBar />
    </div>
  )
}

const MainSideBar = () => {
  const [menuName, setMenuName] = useState()
  useEffect(() => {
    setMenuName("")
  }, [])

  return (
    <>
      <div className='p-4'>
        <div className='w-16 h-16 offset-2' >
          <Link to='/'>
            <img src={logoImage} alt='Logo' title="Logo" />
          </Link>
        </div>
        <div>
          <ul className='gap-2 mt-5'>
            {routes?.map((item) => {
              return item.children?.length > 0 ?
                <>

                  <li key={item.name} className='mt-3 flex'>
                    <div className='flex cursor-pointer' onClick={() => (
                      menuName === item.name ?
                        setMenuName("")
                        : setMenuName(item.name)
                    )}>
                      <div className=' w-2/6 flex gap-2 justify-start' title={item.name}>
                        {item.icon}
                        {item.name === menuName ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                      </div>
                    </div>
                  </li>
                  <ChildSidebar data={item.children} parentData={item.name} menuName={menuName} />
                </> :
                <li key={item.name} className='mt-3'>
                  <Link to={item.path}>
                    <div className=' w-2/6 flex gap-2 justify-start' title={item.name}>
                      {item.icon}
                    </div>
                  </Link>
                </li>
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

const ChildSidebar = ({ data, parentData, menuName }) => {

  return (
    <>
      <ul className={menuName === parentData ? "block  w-4/6" : "hidden"}>
        {
          data?.map((item, i) => {
            return (
              <li key={item.name} >
                <Link to={item.path}>
                  <div className='flex gap-2 justify-start'>
                    {item.icon}
                    <span>
                      {item.name}
                    </span>
                  </div>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default Sidebar