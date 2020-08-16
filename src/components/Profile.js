import  React, {Component} from 'react';

export default function Profile(){
    return(
        <div className="layout">        
        <div className="container">
        <div className="row-offcanvas row-offcanvas-left">
        <div className="dashboard-container-main">      
        <div className="dashboard">
            <header className="push-bottom" >
                <h3 className="dashboard-title">
                    Profile: 
                    Vaibhav Singh
                </h3>
            </header>
        <div className="_container" />
            <ul className="nav nav-tabs push-bottom nav-tabs-custom" role="tablist">
                <li role="presentation" className="active">
                    <a href="#" aria-controls="basic-information" role="tab" data-toggle="tab" aria-expanded="true">
                        Basic information                
                    </a>
                </li>
                <li role="presentation" className="">
                    <a href="#" aria-controls="detailsTab" role="tab" data-toggle="tab" aria-expanded="false">
                        Personal details
                    </a>
                </li>
				<li role="presentation" className="">
					<a href="#" aria-controls="passwordTab" role="tab" data-toggle="tab" aria-expanded="false">
                        Change password
                    </a>
				</li>
            </ul>
    
            <div className="form_container">
                <form id="userForm" action="#" method="post" role="form" className="tab-content-box personal-form" data-toggle="validator" data-show_flash="true" autocomplete="off" novalidate="novalidate">
                    <div className="tab-content">
                
            {/*   PROFILE  */}
                <div role="tabpanel" className="tab-pane active" id="basic-information">
                    <h4 className="dashboard-subtitle">
                        Basic information
                    </h4>

                    <div className="row push-bottom">
                        <div className="col-sm-8">
                            <div className="row">
                                
                                <div className="form-group col-lg-6">
                                    <label for="fname" className="control-label">First name <span>*</span></label>
                                    <input type="text" className="form-control" id="fname" name="user[fname]" value="Vaibhav" />
                                </div>

                                
                                <div className="form-group col-lg-6">
                                    <label for="lname" className="control-label">Last name <span>*</span></label>
                                    <input type="text" className="form-control" id="lname" name="user[lname]" value="Singh" />
                                </div>

                                <div className="form-group col-xs-12">
                                    <label for="user_email" className="control-label">Email address                                        <span>*</span>                                    </label>
                                    <input type="email" name="user[email]" className="form-control" id="user_email" value="vaibhavkumarsingh139@gmail.com" />
                                </div>

                                <div className="form-group col-xs-12" />
                                    <label for="fname" className="control-label">Username</label>
                                    <input type="text" className="form-control" id="username" name="user[username]" value="" autocomplete="off" onfocus="this.removeAttribute(&#39;readonly&#39;);" readonly="" />
                                </div>

                                <div className="form-group col-lg-6">
                                    <label className="control-label">
                                        Roles<span>*</span>
                                    </label>

                                <div className="checkbox ">
                                    <label>
                                        <input type="checkbox" name="user[roles][]" value="1" checked="checked" />
                                            Admin                                                    
                                    </label>
                                </div> 
                                {/*   checkbox  */}
                                <div className="checkbox ">
                                    <label>
                                        <input type="checkbox" name="user[roles][]" value="3" checked="checked" />
                                            User
                                    </label>
                                </div> 
                                {/*   checkbox  */}
                                <div className="checkbox ">
                                    <label>
                                        <input type="checkbox" name="user[roles][]" value="6" />
                                            Teacher                                                    
                                    </label>
                                </div> 
                                {/*   checkbox  */}
                                <div className="checkbox hidden">
                                    <label>
                                        <input type="checkbox" name="user[roles][]" value="9" checked="checked" />
                                            Organization                                                    
                                    </label>
                                </div> 
                                {/*   checkbox  */}
                                <div className="checkbox hidden">
                                    <label>
                                        <input type="checkbox" name="user[roles][]" value="10" />
                                            Parent                                                    
                                        </label>
                                </div> 
                                {/*   checkbox  */}
                                <div className="checkbox hidden">
                                    <label>
                                        <input type="checkbox" name="user[roles][]" value="11" checked="checked" />
                                            Provider                                                    
                                        </label>
                                </div> {/*   checkbox  */}
                                        <input type="hidden" name="roles_errors" id="roles" disabled="" />
                                           
                                </div>
                                    <div className="form-group col-lg-6">
                                                                                <label className="control-label" for="user[status_id]">
                                            Account status                                        </label>
                                                                            <select name="user[status_id]" className="form-control">
                                                                                        <option value="2" selected="selected">
                                                active                                            </option>
                                                                                        <option value="3">
                                                suspended                                            </option>
                                                                                        <option value="4">
                                                deleted                                            </option>
                                                                                    </select>
                                                                        </div>
                                
                                <div className="col-sm-6 form-group">
                                    <div className="user_storage">
                                                                                <label className="control-label">
                                                Storage                                            </label>
                                            <br />
                                            <div className="progress" data-bar_for="user-91373">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="" aria-valuemin="0" aria-valuemax="100" style="width: 0%;">
                                                    <span className="sr-only"></span>
                                                </div>
                                            </div>
                                            <div className="storage-info">
                                                0MB of 500MB used                                            </div>
                                            
                                                                            </div>
                                </div>
                            </div>
                        </div>

                        <div className="form-group col-sm-4 avatar text-center">
                            <label for="" className="control-label">
                                Profile picture<br />
                                <small>(PNG, JPG, GIF files, 200x200px recommended)</small>
                            </label>
                            
                            <div className="profile-picture-upload clearfix">
                                                                    <div className="picture_default picture_holder text-center">
                                        <span>
                                            VS                                        </span>
                                        <div id="uploadresults" data-userid="91373"></div>
                                    </div>
                                                            </div>

                            <input type="hidden" name="user[upload_picture]" id="upload_picture" value="" />
                            <input type="hidden" name="user[crop_x1]" id="crop_x1" value="" />
                            <input type="hidden" name="user[crop_x2]" id="crop_x2" value="" />
                            <input type="hidden" name="user[crop_y1]" id="crop_y1" value="" />
                            <input type="hidden" name="user[crop_y2]" id="crop_y2" value="" />
                            <input type="hidden" name="user[display_width]" id="display_width" value="" />
                            
                            <div className="picture-controls">
                                <div className="btn-input">
                                    <input id="fileupload" type="file" name="files[]" data-url="/cp/picture/upload/id/91373/" />
                                    <button className="btn btn-sm btn-primary">
                                        Upload new photo                                    
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                                        <div>
                          <hr>
                                                      
                                <div style="margin:10px 0;">
                                  <input type="checkbox" className="gdpr_not_mandatory_consent_checkbox" name="consent_ids[]" value="4" id="user_consent_check_4" data-toggle="toggle" data-onstyle="success" data-offstyle="danger" data-on="Yes" data-off="No" /> &nbsp;
                                  <strong>
                                    <label for="user_consent_check_4" style="font-size:16px;">I'd like to receive updates from Vedamo by email            
                                    </label>
                                  </strong>
                                  <strong>
                                    <a href="https://lms-frontend.vedamo.com/page/id/4" target="_blank">
                                                          read more
                                    </a></strong>
                                </div>
                
                                
                                                    <hr />
                                 
                
                {/*   PERSONAL DETAILS  */}
                <div role="tabpanel" className="tab-pane" id="detailsTab">
                    <h4 className="dashboard-subtitle">
                        Personal details                    </h4>
                    <div className="row">
                        <div className="col-md-8">

                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label for="birthdate_picker" className="control-label">Birth date                                                                                </label>
                                        <input type="text" name="meta[birthdate]" id="birthdate_picker" className="form-control" placeholder="" value="" />
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label for="tel" className="control-label">Phone number                                                                                </label>
                                        <input type="tel" className="form-control" id="tel" name="meta[telephone]" value="" />
                                        <input type="hidden" id="check_phone_validation" value="3" />
                                        {/*  <small>example: (359)02/123456</small> */}
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label for="city" className="control-label">City                                                                                    </label>
                                                                                    <input type="text" className="form-control" id="city" name="meta[city]" value="" />
                                                                            </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label for="zip" className="control-label">Zip code</label>
                                        <input type="text" pattern="/([0-9])\w+/g" className="form-control" id="zip" name="meta[zipcode]" value="" />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label for="addr" className="control-label">Address</label>
                                <textarea id="addr" className="form-control" rows="2" name="meta[address]"></textarea>
                            </div>

                             
                            
                            <div className="form-group hidden-best">
                                <label for="additional_info" className="control-label">Additional info</label>
                                <textarea type="text" className="form-control" rows="4" id="additional_info" name="user[additional_info]"></textarea>
                            </div>

                                                            
                                                                                        
                               
                            
                            
                            
                        </div>
                    </div>
        </div>
                
   
                
                
                                
                
                                
              

                    
                              
                    
               
                                   
           
            </form>
         </div>
         </div>
         </div>
         </div>
         </div>
         </div>
         </div>
         </div>

    )
}