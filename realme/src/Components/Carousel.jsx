import { Carousel } from 'antd';

const contentStyle = {
  height: '600px',
  width:"110%",
};
  
export function Carouse() {
    return (
        <>
        <Carousel autoplay>
<div>
  <img style={contentStyle} src="https://image01.realme.net/general/20220116/1642346834821.jpg"/>
</div>
<div>
<img style={contentStyle} src="https://image01.realme.net/general/20220116/1642346702917.jpg"/>

</div>
<div>
<img style={contentStyle} src="https://image01.realme.net/general/20220116/1642346975746.jpg"/>

</div>
<div>
<img style={contentStyle} src="https://image01.realme.net/general/20220116/1642306144424.jpg"/>

</div>
<div>
<img style={contentStyle} src="https://image01.realme.net/general/20220116/1642346539524.jpg"/>

</div>
<div>
<img style={contentStyle} src="https://image01.realme.net/general/20220116/1642346598476.jpg"/>

</div>
</Carousel>
        </>
    )
}
