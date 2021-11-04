import React from 'react';
import './Workspace.css';
import small_RNA_SVG from '../graphics/small_RNA_SVG.svg';
import scaffold_rna_button from '../graphics/scaffold_button.svg';


function Workspace() {
    return (
       <div>
           <text className='rna-title'>RNAMake</text>
           <h2 className='rna-subtitle'>3D Design Toolkit</h2>

           <section>
               <aside>
                   <img src={small_RNA_SVG} float='right'></img>
               </aside>
               <img src={scaffold_rna_button} float='right'></img>
           </section>

           <section color='#E4E9F1' float='right'>
               <text>Recent Experiments</text>
           </section>
       </div>
    );
}

export default Workspace;
