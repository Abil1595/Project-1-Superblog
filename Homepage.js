import {Col,Row} from 'reactstrap';
import bg from './top.svg';
import {Button} from 'reactstrap'
import bg1 from './turno.png';
import bg2 from './aisle.png';
import bg3 from './swiggy.png';
import bg4 from './unacademy.png';
import bg5 from './juspay.png';
import bg6 from './turno.png';
import bg7  from './eatwith.png';
import bg8 from './drivelah.png';
import bg9 from './adobe.png';
import bg10 from './1.png';
import bg11 from './4.png';
import bg12 from './5.png';
import {UncontrolledCarousel} from 'reactstrap';
import bg13 from './next1.png';
import bg14 from './next2.png';
import bg15 from './next3.png';
function Z1()
{
   const items=[
        {
         src:bg10,
         altText:'SLIDE1',
         key:'1'
        },
        {
         src:bg11,
         altText:'SLIDE2',
         key:'2'
        },
        {
         src:bg12,
         altText:'SLIDE3',
         key:'3'
        }
      ]
	return( 
   <div>
   <br/><br/><br/>
   <Row>
   <Col sm={2}></Col>
   <Col sm={8}>
   <div class="b2">
    The Best Alternative for WordPress and Medium blogs
    </div>
    </Col>
    <Col sm={2}></Col>
    </Row><br/>
    <Row>
   <Col sm={2}></Col>
   <Col sm={8}>
   <div class="b3">
    Superblog is auto-optimized for SEO and speed. You can focus on writing content instead of setup, maintenance, and optimization.
    </div>
    </Col>
    <Col sm={2}></Col>
    </Row><br/><br/>
    <center><img src={bg}/></center><br/>
    <Row>
    <Col sm={3}>
    
    </Col>
    <Col sm={3}>
    <center><Button style= {{'background':'#43b730','padding':'10px'}}><h5>Create your blog in one minute</h5></Button></center>
    </Col>
    <Col sm={3}>
    <center><button style= {{'background':'##EDF2F7','height':'50px', 'width':'50%','border':'2px solid transparent','border-radius':'5px'}} ><h5>View Examples</h5></button></center>
    </Col>
    <Col sm={3}>
    
    </Col>
    </Row><br/>
    <Row>
    <Col sm={3}>

    </Col>
    <Col sm={2}>
    <center>✓ No credit card required</center>


    </Col>
     <Col sm={2}>
 <center>✓ Free for 7 days</center>
    </Col>
     <Col sm={2}>
   <center>✓ Cancel anytime</center>
    </Col>
    <Col sm={3}>

    </Col>
    </Row><br/>
    <center><h5>Trusted by Unicorns and YC Companies</h5></center><br/>
    <Row>
    <Col sm={3}>
    
    </Col>
    <Col sm={1}>
    <center><img src={bg1} class="b4"/></center>
    </Col>
    <Col sm={1}>
    <center><img src={bg2} class="b4"/></center>
    </Col>
    <Col sm={1}>
    <center><img src={bg3} class="b4"/></center>
    </Col>
    <Col sm={1}>
    <center><img src={bg4} class="b4"/></center>
    </Col>
    <Col sm={1}>
    <center><img src={bg5} class="b4"/></center>
    </Col>
    <Col sm={4}>
    
    </Col>
    </Row><br/><br/>
    <Row>
    <Col sm={5}>
    
    </Col>
    <Col sm={1}>
    <center><img src={bg7}class="b4"/></center>
    </Col>
    <Col sm={1}>
    <center><img src={bg8}class="b4"/></center>
    </Col>
    <Col sm={5}>
    
    </Col>
    </Row><br/><br/>
    <center><h5>Backed by</h5><br/>
    <img src={bg9}/></center><br/><br/><br/><br/><br/>
    <div class="c2"><center>Your readers would love to read more</center></div><br/>
    <div class="c3"><center>Superblog has beautiful design, fonts, text spacing, and readability. All you<br/> need to do is select a layout, pick your brand color, and connect your domain.</center></div>
    <Row>
    <Col sm={2}></Col>
    <Col sm={8}>
    <center><UncontrolledCarousel items={items}/></center>
    </Col>
    <Col sm={2}></Col>
    </Row><br/><br/>
    <div class="c2"><center>Score high in SEO, Google Lighthouse <br/>and Core Web Vitals automatically</center></div><br/>
<div class="c3"><center>You don't need to hire experts to get these gold standards. If you write<br/> content, superblog will automatically optimize your blog to score 95+.
    </center>
    </div><br/><br/>
   <Row>
    <Col sm={2}></Col>
    <Col sm={8}>
    <center><img src={bg13} class="c4"/></center>
    </Col>
    <Col sm={2}></Col>
    </Row><br/><br/><br/><br/>
    <div class="c2"><center>Keyword to blog post outline in seconds</center></div>
<div class="c3"><center>Superblog AI Helper can generate entire blog post outlines from just a keyword<br/>or topic in a few seconds. 
You don't need to spend hours to get this right.<br/><br/><Button style={{'background':'#43b730','font-size':'20px'}}>See Demo</Button></center></div><br/>
    <Row>
    <Col sm={2}></Col>
    <Col sm={8}>
    <center><img src={bg15} class="c4"/></center>
    </Col>
    <Col sm={2}></Col>
    </Row><br/><br/><br/>
    </div> 
    
		);
}
export default Z1;