import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { padding } from '@mui/system';
import { XLink } from '../../shared/x-lib/components/XLink';

import "./Register.scss";
import TabPanel from './TabPanel';


function Register() {
  return (
<div >
    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >
        <PersonOutlineIcon/>
    </button>

    <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div className="modal-dialog" style={{marginRight: '0'}} >
            <div className="modal-content" style={{height: '96vh'}}>
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className='d-flex'>
                        <TabPanel/>
                    </div>
                </div>  
            </div>
        </div>
    </div>
</div>
  )
}

export default Register