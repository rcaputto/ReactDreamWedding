import '../public/css/FourWedding.css'
import Dossier from '../public/images/Dossier/Upload_20230527-1903191024_1.jpg';
import DossierTwo from '../public/images/Dossier/Upload_20230527-1903191024_2.jpg';
import DossierThree from '../public/images/Dossier/Upload_20230527-1903191024_3.jpg';
import DossierFour from '../public/images/Dossier/Upload_20230527-1903191024_4.jpg';
import DossierFive from '../public/images/Dossier/Upload_20230527-1903191024_5.jpg';

function FourWedding (){
    return(
        <>
        <div className='dossier'>
        <img src={Dossier} alt=""/>
        </div>
        <div className='dossier'>
        <img src={DossierTwo} alt=""/>
        </div>
        <div className='dossier'>
        <img src={DossierThree} alt=""/>
        </div>
        <div className='dossier'>
        <img src={DossierFour} alt=""/>
        </div>
        <div className='dossier'>
        <img src={DossierFive} alt=""/>
        </div>
        </>
    )
}

export default FourWedding