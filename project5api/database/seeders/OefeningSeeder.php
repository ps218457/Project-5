<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class OefeningSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('oefening')->insert([
            [

                'naam' => "Squat",
                'beschrijving' => 'Een squat is dus een kniebuiging, waarbij je je billen naar achteren duwt en je knieën tegelijkertijd niet voorbij je tenen komen.',
                'foto' => 'https://buikspierkwartier.nl/wp-content/uploads/squat11.jpg',
            ],[
                'naam' => "Push-up",
                'beschrijving' => 'Opdrukken, ook wel "push-ups" genoemd (in Vlaanderen ook wel "pompen"), is eenzelfde soort oefening als bankdrukken. De oefening gebruikt echter alleen het eigen lichaam als weerstand.',
                'foto' => 'https://www.outsideonline.com/wp-content/uploads/2017/07/27/perfect-push-up_s.jpg',
            ],[
                'naam' => "Dip",
                'beschrijving' => 'Strek je armen en laat je benen recht of iets achter je je zweven. Span je buik- en bilspieren aan. Adem in en buig de armen tot je een hoek van 90 graden maakt bij je ellebooggewricht. Druk jezelf omhoog en kom terug in de uitgangspositie en adem uit.',
                'foto' => 'https://bodybuildingblog.nl/wp-content/uploads/triceps-dips-oefening.jpg',
            ],[
                'naam' => "Plank",
                'beschrijving' => 'Het hele idee is niet moeilijk: plaats je onderarmen op de grond, duw jezelf omhoog in een push-up houding en laat je buikspieren, bilspieren en hamstrings werken. Een eenvoudige oefening waarmee je alle spieren aanspreekt die je nodig hebt om sneller en krachtiger te kunnen hardlopen.',
                'foto' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ3PERGHQCDqWTrn-IdrRla4BAceiuamQTqsIPLhr7S7vwf-14WUUUvAlHANa51bGPpZY&usqp=CAU',
            ],[
                'naam' => "Paardentrap",
                'beschrijving' => 'Ga op ellebogen en knieën op de grond liggen, met je gezicht naar de grond. Strek dan je rechterbeen naar achteren. Pas op dat je de beweging niet overdrijft, want dan ga je te veel vanuit je onderrug bewegen. Deze oefening moet je voelen in je billen',
                'foto' => 'https://afvallenmetnederland.nl/wp-content/uploads/2019/09/paardentrap-300x158.jpg',
            ],[
                'naam' => "Mountain climber",
                'beschrijving' => 'De mountain climber is een fitnessoefening voor het hele lichaam, waarbij de nadruk ligt op je core. De oefening heet zo, omdat de beweging wat wegheeft van het beklimmen van een berg: terwijl je handen op de grond staan, beweeg je je knieën omstebeurt naar je ellebogen.',
                'foto' => 'https://media.istockphoto.com/vectors/mountain-climber-exercise-men-workout-fitness-aerobic-and-exercises-vector-id1265941112',
            ],[
                'naam' => "Burpee",
                'beschrijving' => 'De burpee is een combinatie-oefening die gebruikt wordt bij fitness. De oefening begint rechtop staand, vervolgens gaat de persoon in squat en brengt zijn handen naar de grond, waarna hij met de handen aan de grond in een sprong zijn benen naar achter brengt in de plankpositie.',
                'foto' => 'https://www.vriendin.nl/content/uploads/2020/04/Ontwerp-zonder-titel-2020-04-08T103402.631.png',
            ],[
                'naam' => "Lunge",
                'beschrijving' => 'De lunge is een fitness-oefening die individueel en bij groepslessen gedaan wordt. De basis voor de oefening is een rechtopstaande positie met de voeten vlak bij elkaar. Het ene been wordt naar voren geplaatst zodanig dat het onderbeen een hoek van 90 graden met de grond maakt.',
                'foto' => 'https://happyhealthy.nl/wp-content/uploads/lunges-uitvoering-1024x576.png.webp',
            ],[
                'naam' => "Wall sit",
                'beschrijving' => 'Begin staand met je rug tegen de muur. Zet je voeten iets naar voren, op schouderbreedte en zak in een squat: je knieën zijn gebogen in een hoek van 90 graden, net als je heupen. Span je buikspieren goed aan en duw je rug tegen de muur.',
                'foto' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8OKv7Kmx43s0cXwKrOveYfNcK2jiFF1fGCQ&usqp=CAU',
            ]
            ,[
                'naam' => "Crunch",
                'beschrijving' => 'De crunch is misschien wel de meest bekende oefening voor het versterken van je buikspieren. Je hebt er dus ongetwijfeld wel eens over gehoord. De crunch wordt in veel gevallen verward met de sit-up. Toch is er een verschil in de crunch en de sit-up. Om je alvast een voorproefje te geven: de crunch is een kleinere beweging waarbij je niet volledig omhoog beweegt. De sit-up daarentegen wel.',
                'foto' => 'https://image.shutterstock.com/image-photo/young-woman-doing-exercise-crunch-260nw-499551544.jpg',
            ]
        ]);
    }
}
