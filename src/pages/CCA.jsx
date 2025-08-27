import { Users } from "lucide-react";
import ImageCarousel from "../components/ImageCarousel";
import ScrollFloat from '../components/ScrollFloat/ScrollFloat';

import ignite1 from "../assets/cca/ignite1.jpg";
import ignite2 from "../assets/cca/ignite2.jpg";
import karate1 from "../assets/cca/karate1.jpg";
import spotp1 from "../assets/cca/spotp1.jpg";
import vm1 from "../assets/cca/vm1.jpg";

export const CCA = () => {
  const igniteImages = [ignite1, ignite2];
  const vmImages = [vm1];
  const spotpImages = [spotp1];
  const karateImages = [karate1];

  return (
    <section id="cca" className="relative z-10 py-20 px-6 lg:px-20">

      <ScrollFloat
        animationDuration={1}
        ease='back.inOut(2)'
        scrollStart='center bottom+=50%'
        scrollEnd='bottom bottom-=40%'
        stagger={0.05}
      >
        Co-Curricular Activities
      </ScrollFloat>

      <div className="space-y-6">
        {/* WSC EXCO card */}
        <div id="wscexco" className="scroll-mt-24 card-shine p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-gray-600 hover:bg-gradient-to-br hover:from-gray-900 hover:to-gray-800 transition duration-300">
          <div className="grid gap-6 lg:grid-cols-[minmax(360px,400px)_1fr] items-start">
            <ImageCarousel images={igniteImages} alt="Ignite Change" />

            <section className="text-gray-300 space-y-3">
              <h3 className="flex items-center gap-2 text-xl font-bold text-blue-600 -mt-2">
                <Users className="w-6 h-6" />
                NTU Welfare Services Club 30th Executive Committee
              </h3>

              <p className="font-bold">
                Office Bearer
                <br />
                <span className="text-sm font-medium text-white/60">Sep 2024 – Aug 2025</span>
              </p>

              <ul className="list-disc text-sm pl-4 space-y-1">
                <li>Collaborated with WSC Chairpersons to coordinate and support volunteering initiatives</li>
                <li>Liaised and coordinated the planning of NTU Open House 2025 for WSC</li>
                <li>Represented WSC at the Responders, Partners and Volunteers Appreciation (RPVA) Event 2025 by SGSecure, receving award on behalf of the club</li>
                <li>Actively participated in multiple leadership and personal development workshops to enhance personal growth</li>
                <li>Participated in the Singapore Youth Leader Programme (SYLP) 2025 organised by the National Youth Council (NYC) on 14 - 16 June 2025</li>
                <li>Served as an Election Officer for WSC, overseeing rally campaigns for the 31st WSC ExCo</li>
              </ul>
            </section>
          </div>
        </div>
        
        {/* WSC IGC card */}
        <div id="wscigc" className="scroll-mt-24 card-shine p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-gray-600 hover:bg-gradient-to-br hover:from-gray-900 hover:to-gray-800 transition duration-300">
          <div className="grid gap-6 lg:grid-cols-[minmax(360px,400px)_1fr] items-start">
            <ImageCarousel images={igniteImages} alt="Ignite Change" />

            <section className="text-gray-300 space-y-3">
              <h3 className="flex items-center gap-2 text-xl font-bold text-blue-600 -mt-2">
                <Users className="w-6 h-6" />
                NTU Welfare Services Club – Ignite Change (IGC)
              </h3>

              <p className="font-bold">
                Chairperson
                <br />
                <span className="text-sm font-medium text-white/60">Sep 2024 – Aug 2025</span>
              </p>

              <ul className="list-disc text-sm pl-4 space-y-1">
                <li>Spearheaded the WSC Freshmen Orientation Programme (One of NTU's Big 4 Camp) on 25 - 27 July 2025 with over 240 Freshmen</li>
                <li>Oversaw a team of 13 IGC Executive Committee members and 67 Main Committee members</li>
                <li>Planned and exceuted mulitple bonding events throughout the term to foster club cohesion</li>
                <li>Organised volunteering initiatives in collaboration with the Muscular Dystrophy Association Singapore (MDAS)</li>
                <li>Igniting the spirit of volunteerism among freshmen and club members</li>
                <li>Previously served as a Programmer in AY 2023/2024, responsible for planning the orientation activities</li>
              </ul>
            </section>
          </div>
        </div>

        {/* WSC VM card */}
        <div id="wscvm" className="scroll-mt-24 card-shine p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-gray-600 hover:bg-gradient-to-br hover:from-gray-900 hover:to-gray-800 transition duration-300">
          <div className="grid gap-6 lg:grid-cols-[minmax(360px,400px)_1fr] items-start">
            <ImageCarousel images={igniteImages} alt="Ignite Change" />

            <section className="text-gray-300 space-y-3">
              <h3 className="flex items-center gap-2 text-xl font-bold text-blue-600 -mt-2">
                <Users className="w-6 h-6" />
                NTU Welfare Services Club – Volunteer Movement (VM)
              </h3>

              <p className="font-bold">
                Regular Volunteer
                <br />
                <span className="text-sm font-medium text-white/60">Sep 2024 – Aug 2025</span>
              </p>

              <ul className="list-disc text-sm pl-4 space-y-1">
                <li>Volunteered monthly with various beneficiaries ranging from children, to migrant workers, to the elderly</li>
                <li>Served as a Group Leader for VM's flagship volunteering event, Kid's World, overseeing a group of 9 Volunteers.</li>
                <li>Participated in monthly meetings to discuss the volunteering activities for Kid's World.</li>
              </ul>
            </section>
          </div>
        </div>

        {/* SPOT Programme card */}
        <div id="spot" className="scroll-mt-24 card-shine p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-gray-600 hover:bg-gradient-to-br hover:from-gray-900 hover:to-gray-800 transition duration-300">
          <div className="grid gap-6 lg:grid-cols-[minmax(360px,400px)_1fr] items-start">
            <ImageCarousel images={igniteImages} alt="Ignite Change" />

            <section className="text-gray-300 space-y-3">
              <h3 className="flex items-center gap-2 text-xl font-bold text-blue-600 -mt-2">
                <Users className="w-6 h-6" />
                SP Outstanding Talent Programme (SPOT)
              </h3>

              <p className="font-bold">
                Club Member
                <br />
                <span className="text-sm font-medium text-white/60">Apr 2019 – May 2021</span>
              </p>

              <ul className="list-disc text-sm pl-4 space-y-1">
                <li>Took up additional SP modules and courses for hoslistic development</li>
                <li>Participated in multiple seminars, workshops and leadership activities to develop leadership potential and build knowledge on current affairs</li>
                <li>Awarded Certificate of Achievement (Outstanding) at graduation</li>
              </ul>
            </section>
          </div>
        </div>

        {/* SP Karate card */}
        <div id="spkc" className="scroll-mt-24 card-shine p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-gray-600 hover:bg-gradient-to-br hover:from-gray-900 hover:to-gray-800 transition duration-300">
          <div className="grid gap-6 lg:grid-cols-[minmax(360px,400px)_1fr] items-start">
            <ImageCarousel images={igniteImages} alt="Ignite Change" />

            <section className="text-gray-300 space-y-3">
              <h3 className="flex items-center gap-2 text-xl font-bold text-blue-600 -mt-2">
                <Users className="w-6 h-6" />
                SP Karate Club
              </h3>

              <p className="font-bold">
                Regular Trainee, Treasurer
                <br />
                <span className="text-sm font-medium text-white/60">Apr 2018 – May 2021</span>
              </p>

              <ul className="list-disc text-sm pl-4 space-y-1">
                <li>Managed the club finances, do up claims for reimbursement, and oversaw the overall expenses of the club</li>
                <li>Actively participated in training sessions and competitions</li>
                <li>Assisted in organising club events and activities</li>
                <li>Achieved Brown Belt 2 Tip at the end of 2021</li>
              </ul>
            </section>
          </div>
        </div>

      </div>
    </section>
  );
};
