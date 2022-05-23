import { useTranslation } from 'react-i18next';
import { setDataToStorage } from '../../storage/srorage';

const XLanguageSelector = () => {
    const { i18n } = useTranslation();

    const onChangeLanguage = (language: string) => {
        i18n.changeLanguage(language);
        setDataToStorage("language",`${language}`);
    }
    
    return (
        <div >
            <img 
                src="http://www.geognos.com/api/en/countries/flag/AZ.png" 
                alt="Azerbaijan" 
                style={{width: "30px", margin: "15px 7px 0 0", cursor: "progress", height: "20px", objectFit: "cover"}}
                onClick={() => onChangeLanguage('az') }
                />
            <img 
                src="http://www.geognos.com/api/en/countries/flag/GB.png" 
                alt="English" 
                style={{width: "30px", margin: "15px 0 0 0", cursor: "progress", height: "20px"}}
                onClick={() => onChangeLanguage('en') }
                />
        </div>
    )
}

export default XLanguageSelector;