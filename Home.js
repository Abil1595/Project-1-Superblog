import bg from './logo.jpg';
import bg1 from './facebook.png';
import bg2 from './email.png';
import bg3 from './linkedin.png';
import bg4 from './twitter.png';
import bg5 from './new121.png';
import bg6 from './new13.png';
import bg7 from './new14.png'
import React, { useState } from 'react';  
import {Outlet,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Col,Row} from 'reactstrap';
import bg8 from './logo.jpg';
import {NavItem,NavLink,DropdownMenu,DropdownItem,NavbarToggler,NavbarBrand,Collapse,Button} from 'reactstrap';
function Z1()
{
	return(
   <div>
   <br/><br/><br/>
    <Row>
    <Col sm={12}>
    <div class="abi4">
     <h1>Critical WordPress LiteSpeed Plugin<br/>
     Flaw Endangers 4 Million Sites</h1><br/>
    </div> </Col> </Row><br/>
    <Row>
    <Col sm={3}></Col>
    <Col sm={3} style={{'padding':'20px'}}>
     <center><p style={{'color':'green'}}>Sai Krishna· Oct 30, 2023· 2 min read·News</p></center> </Col>
     <Col sm={3} style={{'padding':'10px'}}>
     <div class="abi3"><center> <img src={bg1} class="img1" />  <img src={bg2} class="img1"/>  <img src={bg3} class="img1"/> <img src={bg4} class="img1"/></center>
     </div>
     </Col>
     <Col sm={3}></Col> 
    </Row><br/>
    <Row>
    <Col sm={3}></Col>
    <Col sm={6}>
    <div class="a1">
    <h2 style={{'color':'black'}}>Contents</h2><br/>
    <a href="#dis"><h4 style={{'color':'green'}}>Discovery</h4></a><br/>
    <a href="#imp"><h4 style={{'color':'green'}}>Impact</h4></a><br/>
    <a href="#disc"><h4 style={{'color':'green'}}>Responsible Disclosure</h4></a><br/>
   <a href="#act"> <h4 style={{'color':'green'}}>Action for Website Owners</h4></a><br/>
    <a href="#bet"><h4 style={{'color':'green'}}>A Better Alternative</h4></a><br/>
    </div>
    </Col>
    <Col sm={3}></Col>
    </Row>
    <Row>
    <Col sm={3}></Col>
    <Col sm={6}>
    <div class="a2">
   <h5>WordPress is notorious for slow speeds if not properly optimized. So, WordPress users install various plugins to speed up their websites. LiteSpeed is one such popular plugin that is installed on millions of WordPress sites.<br/><br/>

A global WordPress security agency, Wordfence, recently identified a critical XSS vulnerability that puts around 4,000,000 WordPress sites at risk. </h5>
   </div>
    </Col>
    <Col sm={3}></Col>
    </Row><br/><br/><br/><br/>
    <Row>
    <Col sm={3}> </Col>
    <Col sm={6}>
    <div class="a2">
    <h3 id="dis"style={{'color':'black','font-weight':'bold'}} >Discovery</h3><br/>
<h5>On August 14, 2023, Wordfence's Threat Intelligence team identified a critical stored Cross-Site Scripting (XSS) vulnerability in the widely used LiteSpeed Cache plugin. This plugin is active on more than 4 million WordPress websites, making it the most popular cache plugin</h5><br/>
    <h3 id="imp" style={{'color':'black','font-weight':'bold'}}>Impact</h3><br/>
<h5>The vulnerability allows malicious actors with contributor-level permissions or higher to inject harmful web scripts into pages using the plugin's shortcode. This poses a significant security risk.</h5><br/>
     <h3 id="disc" style={{'color':'black','font-weight':'bold'}}>Responsible Disclosure</h3><br/>
<h5>Wordfence promptly contacted the LiteSpeed Cache Team on the same day the vulnerability was discovered, leading to a swift response from the developer team. A patch was created on August 16, 2023, and released to the WordPress repository on October 10, 2023.</h5>
<br/>
<h3 id="act" style={{'color':'black','font-weight':'bold'}}>Action for Website Owners</h3><br/>
<h5>Website owners are strongly advised to update their LiteSpeed Cache plugin to the latest patched version, which is version 5.7 as of the writing. This update is crucial to ensure the security of their websites.</h5><br/>
 <h3 id="bet" style={{'color':'black','font-weight':'bold'}}>A Better Alternative</h3><br/>
<h5>Since WordPress users are always dependent on third-party plugins for most basic needs, it is a common problem to deal with every time. Instead, you can use a modern and secure blogging platform like Superblog for your blog. Superblog is auto-optimized for speed and SEO. Your blog remains super fast irrespective of how much traffic you get and how much content you post.</h5><br/>
<button class="a3">TIPS</button>     <button class="a4">WORDPRESS</button>
     </div>
     </Col>
    <Col sm={3}> </Col>
    </Row>
    <Row>
    <Col sm={2}>
    </Col>
    <Col sm={8}>
    <div class="a5">
    <h3 style={{'color':'black','font-weight':'bold'}}>Want an SEO-focused and blazing fast blog?</h3><br/>
<h6>Superblog let's you focus on writing content instead of optimizations.</h6>
    <br/><input type="text" placeholder="Your Phone" style={{'border':'rgb(67 183 48 / 10%)','width':'35%','height':'40px'}}/>  <Button style={{'background':'#43b730','height':'40px'}}>Signup</Button>
    </div>
    </Col>
    <Col sm={2}>
    </Col>
    </Row><br/><br/><br/>
    <Row>
    <Col sm={3}>
    </Col>
    <Col sm={6}>
       <div class="a6">
    <h3 style={{'color':'black','font-weight':'bold'}}>Superblog</h3><br/>
<h5>Superblog is a blazing fast blogging platform for beautiful reading <br/><br/>and writing experiences. Superblog takes care of SEO audits, site <br/><br/>optimizations automatically.</h5><br/>
<center><Button style={{'background':'#43b730'}}>View Site</Button></center>
    </div>
    </Col>
    <Col sm={3}>
    </Col>
    </Row><br/><br/>
   <center> <h3 style={{'color':'black','font-weight':'bold'}}>You may also want to read</h3></center>
  <br/>
    <Row>
    <Col sm={3}>
    </Col>

    <Col sm={3}>
   <img src={bg5} class="a7"/>
  </Col>
  <Col sm={3}>
   <div class="a9">
   <h5 style={{'font-weight':'bold'}}> 5 Beautiful font combinations for<br/><br/> your blog<br/><button class="a11">TIPS</button><br/>

</h5><p>Sai Krishna · Sep 15, 2023 · 1 min read</p>
   </div>
  </Col>
    
    <Col sm={3}>
    </Col>
    </Row><br/>
    <Row>
    <Col sm={3}>
    </Col>

    <Col sm={3}>
   <img src={bg6} class="a7"/>
  </Col>
  <Col sm={3}>
   <div class="a9">
   <h5 style={{'font-weight':'bold'}}> Adobe Fund backs ⚡Superblog
<br/> <br/><button class="a11">News</button><br/>

</h5><p> Superblog Team · Mar 20, 2023 · 2 min read</p>
   </div>
  </Col>
    
    <Col sm={3}>
    </Col>
    </Row><br/>
    <Row>
    <Col sm={3}>
    </Col>

    <Col sm={3}>
   <img src={bg7} class="a7"/>
  </Col>
  <Col sm={3}>
   <div class="a9">
   <h5 style={{'font-weight':'bold'}}> Customizing your Superblog with Custom CSS and JS
<br/> <br/><button class="a11">Random</button><br/>

</h5><p> Sai Krishna · Mar 2, 2023 · 2 min read</p>
   </div>
  </Col>
    
    <Col sm={3}>
    </Col>
    </Row><br/><br/>
    <Row>
   <Col sm={3}></Col>
   <Col sm={6}>
   <center><Button style= {{'background':'#43b730','margin-left':'10px','width':'90%'}} ><h5>Leave a comment</h5></Button></center>
   </Col>
   <Col sm={3}></Col>
    </Row><br/><br/><br/><br/>
    <Row style={{'background':'#f7fafc'}}>
    <Col sm={3}>
    <div class="abi2">
    <img src={bg8}/><br/><br/> 
    <p>All rights reserved © 2024</p>
    </div>
    </Col>
    <Col sm={2} style={{'padding':'30px'}}>
    <div class="b1">
    <h5>Product</h5><br/>
Features<br/><br/>
Pricing<br/><br/>
FAQ<br/><br/>
Blog<br/><br/>
Supershots<br/><br/>
AI Post Outline Generator<br/><br/>
SEO Analyzer Tool<br/><br/>
Featured Image Creator<br/><br/><br/><br/>
<h5>Blog</h5><br/>

All Posts<br/><br/>
Search<br/><br/>
Topics
</div>
    </Col>
    <Col sm={2} style={{'padding':'30px'}}>
    <div class="b1">
    <h5>Comparisons</h5><br/>

WordPress vs Superblog<br/><br/>
Ghost vs Superblog<br/><br/>
Medium vs Superblog<br/><br/>
WordPress vs Ghost vs Superblog<br/><br/>
Which platform to Choose

  </div>
    </Col>
     
    <Col sm={2} style={{'padding':'30px'}}>
    <div class="b1">
    <h5>Use Cases</h5><br/>

For Carrd Sites<br/><br/>
For Bubble Apps<br/><br/>
For Startups<br/><br/>
For Swipe Pages<br/><br/>
For Webflow Sites<br/><br/>
For Agencies

   </div>
    </Col>
   
    </Row>
    </div>
		);
}
export default Z1;