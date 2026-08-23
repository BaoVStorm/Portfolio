import React from 'react';

export const Footer: React.FC = () => {
  return (
    <>
<footer id="footer">
<p>
<span>Copyright </span>
<i className="fa-regular fa-copyright"></i>
<span> 2025 </span>
<span className="hightlight-footer">VStorm | TranVuBao</span>
<span>. All rights reserved.</span>
</p>
{/*  <p>
                <span className="hightlight-footer">85%</span>
                <span>hand-crafted</span>,
                <span className="hightlight-footer">15%</span>
                <span>AI-assisted</span>.
            </p>  */}
{/*  <p>
                The design was inspired by a template from 
                <a href="https://extact.com/" className="hightlight-footer" target="_blank">extact</a>
            </p>      */}
<p>
<span>Latest Updates: </span>
<span className="hightlight-footer"> 24. 08. 2026.</span>
</p>
</footer>
    </>
  );
};
