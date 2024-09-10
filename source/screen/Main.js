import React from 'react';

import { Text} from 'react-native';
import Background from './Background'; 

function Main() {
    return (
        <Background>
            <Text style={{marginLeft:-30,textAlignVertical:'center',fontSize:60,width:200,fontWeight:200}}>MAIN</Text>
        </Background>
    );
}

export default Main;