import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export default function BasicLayout() {
  // const navigate = useNavigate()
  // const back: any = () => navigate(-1)
  return (
    <div>
      <Suspense fallback={<div className="text-center pt-11" />}>
        {/* <NavBar
          onBack={back}
          style={{ marginBottom: '10px', backgroundColor: '#fff' }}>
          标题
        </NavBar> */}
        <Outlet />
      </Suspense>
    </div>
  )
}
