'use client'
import ManageProductComp from "../components/ManageProductComp"
function page() {
  return (
    <div>
      <ManageProductComp manage="Transaction History" isManage={false} Transaction={true} />
    </div>
  )
}

export default page
