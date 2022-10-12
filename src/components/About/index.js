import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
const [letterClass, setLetterClass] = useState('text-animate')

return (
     <div className="container about-page">
       <div className="text-zone">
         <h1>
           <AnimatedLetters
              
             strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
             idx={15}
           />
         </h1>
  

   
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis quibusdam error totam. Consectetur, consequatur? Dolorum asperiores, sint perspiciatis sapiente rerum nam pariatur quaerat fuga quod quas odio fugiat atque consectetur inventore quo qui. Eum similique vero earum veritatis omnis sit praesentium numquam deleniti inventore eligendi ab vel impedit facilis cupiditate ipsa alias blanditiis delectus, suscipit in quam, ducimus consectetur, quos voluptatum. Sapiente possimus voluptate, commodi ad voluptatem laborum suscipit animi iusto consequuntur perferendis necessitatibus hic asperiores aperiam. Sunt cum debitis aspernatur atque eum eaque, ullam consectetur tempora pariatur aut consequatur, doloribus impedit labore laudantium exercitationem iste magnam. Nam, sunt est.
         </p>

         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sint nobis consectetur illo, voluptas, minus fuga obcaecati exercitationem, dolore distinctio quisquam sed. Sapiente natus perferendis molestiae quaerat quam quae maiores, voluptatum laborum et quasi hic quas nulla nihil qui suscipit sit, reprehenderit fugit similique inventore consequuntur explicabo eum! Aperiam, in!
         </p>

         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio consequuntur possimus perspiciatis sapiente, odio consectetur sed? Distinctio harum eum amet optio facere quae, error, perferendis ipsam ipsa ab qui nihil.
         </p>

       </div>
     </div>
   )
 }

 export default About