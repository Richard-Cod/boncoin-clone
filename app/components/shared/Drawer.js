import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { ChevronRightIcon } from '@heroicons/react/solid';

export function DrawerList({list ,isSuper,iconsClasses="", hrIndex = 1 , allHrIndex=false}) {
    return (
        <ul className="w-96  pl-2  h-96 ">
            {list.map(({title , LeftIcon} , index) => <div key={index}>
           <DrawerListItem isSuper={isSuper}  LeftIcon={LeftIcon && <LeftIcon className={iconsClasses +" h-6 mr-4"} /> }  label={title}/>
            {index == hrIndex && !allHrIndex &&  <hr/>}
            {allHrIndex &&  <hr/>}
            
            </div>)}
        </ul>
    )
}

export const DrawerListItem = ({className , label ,RightIcon , LeftIcon ,isSuper =false,  onClick,iconsClasses = " ", iconPosition="left"}) => {
    const listClasses = "flex items-center font-medium text-sm my-4 text-[1em] py-1 pl-2 cursor-pointer hover:bg-green-200 hover:text-green-800 " + iconsClasses + " " + className
    return <li onClick={onClick} className={listClasses}> {LeftIcon }  {label} { RightIcon } { isSuper && <ChevronRightIcon className="h-6 mr-4 ml-auto text-gray-400"/> }  </li>
}



export default function TemporaryDrawer({showLogo = true,children,Label , TopCloseLabel , anchor = "left" }) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const listClasses = "flex items-center font-medium text-sm my-4 text-[1em] cursor-pointer" 


  return (
        <>
          <button className="w-full" onClick={toggleDrawer(anchor, true)}>
              <Label />
          </button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {showLogo && <img src="/logo.png" className="h-10 mx-auto mt-5" />}

            {TopCloseLabel && <div  onClick={toggleDrawer(anchor, false)} >
                    <TopCloseLabel />
            </div>}
              {children}
          </Drawer>
        </>
  );
}