import React from 'react';
import styled from 'styled-components';
const HeaderMenu = styled.div`
display: flex;
flex: 1 1 auto;
justify-content: space-between;
    z-index: 1;

 color: rgba(255,255,255,0.75);





ul{
    display: flex;


    padding-left: 8px;
 li a {
    color: rgba(255,255,255,0.75);
    font-size: 14px;
    font-weight: 600;
    padding-left: 8px;
    padding-right: 8px;

 }
}




`;
const HeaderSearch = styled.div`
  
 
   
 .form-control {
    border-right: 1px solid #eaecef;

    width: 99.999%;
    min-height: 26px;
    padding-top: 0;
    padding-bottom: 0;
    background: none;

    box-shadow: none;
    font-size: 14px;
    font-weight: 600;

color: #fff;
    padding-left: 8px;
    font-size: 12px;
    color: #586069;
    white-space: nowrap;
    vertical-align: middle;
    border: 0;
    outline: 0px;
    -webkit-appearance:none;


 }
    
    width: 300px;
    border-radius: 3px;
      min-height: 30px;
    font-size: inherit;
    color: #fff;
    background-color: rgba(255,255,255,0.125);
  


`;

const Input = styled.input`
 

 



`;

export default () => (

<HeaderMenu>

<HeaderSearch>
<form>
    
    <Input  name="utf8" type="hidden" value="✓" />
    <label className="form-control">

      <input type="text" className="form-control"  name="q" value="" placeholder="Search GitHub" aria-label="Search GitHub" data-scoped-placeholder="Search" autocapitalize="off" />
</label>
    </form>

</HeaderSearch>

<ul>
<li> <a href="#">Pull Requests</a></li>
<li><a href="#">Issues</a></li>
<li><a href="#">Market Place</a></li>
<li><a href="#">Explore</a></li>
</ul>

<div>
<ul>
<li><span className="fas fa-bell"></span></li>
<li>&#43;<span className="fas fa-sort-down"></span></li>
<li><span className="fas fa-user"></span><span className="fa fa-sort-down"></span></li>
</ul>
</div>

</HeaderMenu>

)