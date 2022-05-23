export default function Registration() {
    return (
      <div>
          
          <input placeholder='Name' type="text" className="form-control py-2 mt-5"/>
          <br/>
          <input placeholder=' Last Name' type="text" className="form-control py-2"/>
          <br/>
          <input placeholder='Email' type="text" className="form-control py-2"/>
          <div className='mt-3' ><button type="button" className="btn btn-secondary " data-bs-dismiss="modal">To Carry On</button></div>
          <p className="mt-2">Qeydiyyatdan keçməklə saytdan  istifadə qaydalarını qəbul edirsiniz</p>
      </div>
    )
  }
  