import React from 'react';
import './Workspace.css';
import small_RNA_SVG from '../graphics/small_RNA_SVG.svg';
import scaffold_rna_button from '../graphics/scaffold_button.svg';


function Workspace() {
    return (
       <div>
           <div className='home-left'>
               <div className='home-group'>
                   <text className='rna-title'>RNAMake</text>
                   <h2 className='rna-subtitle'>3D Design Toolkit</h2>
                   <div className='scaffold-button'>
                        <img src={scaffold_rna_button} alt=''></img>
                   </div>
                </div>

                <div className='rna-svg'>
                    <img src={small_RNA_SVG} alt=''></img>
                </div>
            </div>

           <div className='recent-exp'>
                <p className='exp-font'>Recent Experiments</p>
           </div>
       </div>
    );
}

export default Workspace;
