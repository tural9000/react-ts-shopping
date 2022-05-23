
export default function CheckIn() {
  return (
    <div>
        <input placeholder='Email' type="text" className="form-control py-2 mt-5"/>
        <br/>
        <input placeholder='Password' type="text" className="form-control py-2"/>
        <div className='mt-3' ><button type="button" className="btn btn-secondary " data-bs-dismiss="modal">To Carry On</button></div>
    </div>
  )
}
