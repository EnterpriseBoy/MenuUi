import React from 'react'

function Header() {
  return (
    <div>
      <h4 className="mb-4 header-title">CMS - Games</h4>
      <div className="navbar-collapse collapse bs-nav-padding">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <a href="javascript:void(0)" id="dd_user" className="nav-link dropdown-toggle" data-toggle="dropdown">
              {/* <i className="fa fa-user padding-right-10"></i>@User.Identity.Name&nbsp; */}
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dd_user">
              {/* @Html.AntiForgeryToken()
              <a href="javascript:void(0)" onclick="return helper.logout('@Url.Content(" /Account/Login")')" className="logout">Logout</a> */}
            </div>
          </li>
        </ul>
      </div>
    </div >
  );
}

export default Header;