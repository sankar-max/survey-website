import React from 'react'
import Image from 'next/image';
import { H4 } from '@/components/ui/h4';
import { cn } from '@/lib/utils';
import { P } from '@/components/ui/p';
import Link from 'next/link';
import { H1 } from '../ui/h1';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

import FeaturesData from '../featuresdata';


export default function Features() {
  return (
    <div className="container space-y-5">
      <div className="grid place-items-center lg:py-36">
        <div className="h- grid items-center gap-x-2 gap-y-7 md:grid-cols-7">
          <div className="col-span-3 space-y-7">
            <div className="">
              <H1>ZettaSurvey ​Features​</H1>
              <P className="">
                ZettaSurvey is very user friendly yet packed full of
              </P>
              <P>Advanced Features. Sign up</P>
            </div>
            <div className="flex items-center gap-x-3">
              <Button className="group">
                Sign Up
                <div className="ml-2 text-xl duration-300 group-hover:translate-x-1">
                  <ArrowRight size={18} />
                </div>
              </Button>
            </div>
          </div>
          <div className="col-span-4 h-[400px] w-full">
            <div className="relative h-full w-full">
              <Image src="/feature.svg" alt="hero-image" fill />
            </div>
          </div>
        </div>
      </div>
      {/* 
      <div className="text-center">
        <div className="space-y-5">
          <H1>Why ZettaSurvey?</H1>
          <P className="">
            ZettaSurvey helps user to create Surveys with multiple Features.
          </P>
          <div className="flex justify-center">
            <IoChevronDownCircle size={60} className="text-blue-600" />
          </div>
        </div>
      </div>

      <div className="space-y-7 pt-12">
        <div className="grid items-center gap-x-3 gap-y-3 md:grid-cols-2">
          <div className="space-y-5">
            <H4 className="font-bold"> Survey Creation</H4>
            <div className="">
              <P className="font-semibold">User-Friendly Interface:</P>
              <P className="text-justify">
                ZettaSurveyoffers an intuitive interface for users to create
                surveys without requiring advanced technical skills.
              </P>
            </div>
          </div>
          <div className={cn("relative h-96 w-full")}>
            <Image src="/feature/Answer_Key.png" alt="kkj" fill />
          </div>
        </div>
      </div>

      <div className="space-y-7 pt-12">
        <div className="grid items-center gap-x-3 gap-y-3 md:grid-cols-2">
          <div className="order-2 space-y-5">
            <H4 className="font-bold"> Uses of Multilingual Surveys</H4>
            <div className="">
              <ul className="mt-10 list-disc space-y-3 pl-5">
                <li className="text-lg leading-relaxed text-black">
                  You can create a multilingual survey with different language
                  options by adding your own translations.
                </li>
                <li className="text-lg leading-relaxed text-black">
                  With a single survey, your survey takers can choose the
                  language they’re most comfortable with from a drop down menu.
                </li>
                <li className="text-lg leading-relaxed text-black">
                  You can also send a link that automatically opens your survey
                  to the selected language.
                </li>
              </ul>
            </div>
          </div>
          <div className={cn("relative order-1 h-96 w-full")}>
            <Image src="/feature/Answer_Key.png" alt="kkj" fill />
          </div>
        </div>
      </div>

      <div className="space-y-7 pt-12">
        <div className="grid items-center gap-x-3 gap-y-3 md:grid-cols-2">
          <div className="space-y-5">
            <H4 className="font-bold">Uses of Automation & workflows</H4>
            <div className="">
              <P className="text-justify">
                Extend capabilities using workflows, APIs, webhooks, and
                integrations. Connect with your everyday applications, create
                efficient workflows, and automate business processes. Schedule
                and automate your periodic surveys using the Recurring feature.
                Configure once and forget.
              </P>
            </div>
          </div>
          <div className={cn("relative h-96 w-full")}>
            <Image
              src="/feature/Uses of Automation & workflows.png"
              alt="kkj"
              fill
            />
          </div>
        </div>
      </div>

      <div className="space-y-7 pt-12">
        <div className="grid items-center gap-x-3 gap-y-3 md:grid-cols-2">
          <div className="order-2 space-y-5">
            <H4 className="font-bold"> Uses of Skip Logic</H4>
            <div className="">
              <ul className="mt-10 list-disc space-y-3 pl-5">
                <li className="text-lg leading-relaxed text-black">
                  A respondent only sees relevant questions, so the time spent
                  completing the survey reduces drastically.
                </li>
                <li className="text-lg leading-relaxed text-black">
                  The simplest use of skip logic is in a situation when
                  respondents need not view a few questions.
                </li>
                <li className="text-lg leading-relaxed text-black">
                  Employee satisfaction surveys: Skip logic can help present the
                  right questions to the respondents.
                </li>
                <li className="text-lg leading-relaxed text-black">
                  Event planning: Ask presenters whether they’ll need them and
                  then for how long or how many.
                </li>
              </ul>
            </div>
          </div>
          <div className={cn("relative order-1 h-96 w-full")}>
            <Image src="/feature/skiplogic.png" alt="kkj" fill />
          </div>
        </div>
      </div>

      <div className="space-y-7 pt-12">
        <div className="grid items-center gap-x-3 gap-y-3 md:grid-cols-2">
          <div className="space-y-5">
            <H4 className="font-bold">Uses of Survey Branching</H4>
            <div className="space-y-5">
              <div className="">
                <P className="font-semibold">Conditional survey branching: </P>
                <P className="text-justify">
                  Conditional branching is used when a condition must be met
                  while answering the survey.
                </P>
              </div>
              <div className="">
                <P className="font-semibold">
                  Unconditional survey branching:{" "}
                </P>
                <P className="text-justify">
                  Unconditional branching occurs even if no condition is
                  satisfied. For example, all respondents will see a “Thank You”
                  page irrespective of their answers. This condition usually is
                  set on the last question of the survey.
                </P>
              </div>
            </div>
          </div>
          <div className={cn("relative h-96 w-full")}>
            <Image src="/feature/Branching.png" alt="kkj" fill />
          </div>
        </div>
      </div> */}
      {/* /////// */}

      <FeaturesData />

      {/* <div className="space-y-7 pt-12">
        <div className="grid items-center gap-x-3 gap-y-3 md:grid-cols-2">
          <div className="order-2 space-y-5">
            <H4 className="font-bold">Limits for image/multimedia files</H4>
            <div className="">
              <ul className="mt-10 list-disc space-y-3 pl-5">
                <li className="text-lg leading-relaxed text-black">
                  You can upload unlimited number of files with all paid
                  licenses. However, depending on your license level there is a
                  limitation on the total file size.
                </li>
                <li className="text-lg leading-relaxed text-black">
                  Approved File Extensions that can be uploaded.
                </li>
              </ul>
            </div>
          </div>
          <div className={cn("relative order-1 h-96 w-full")}>
            <Image src="/feature/multimedia.png" alt="kkj" fill />
          </div>
        </div>
      </div>

      <div className="space-y-7 pt-12">
        <div className="grid items-center gap-x-3 gap-y-3 md:grid-cols-2">
          <div className="space-y-5">
            <H4 className="font-bold">Uses of Answer_Key Features</H4>
            <div className="">
              <ul className="mt-10 list-disc space-y-3 pl-5">
                <li className="text-lg leading-relaxed text-black">
                  Answer_key can set for each correct answer.
                </li>
                <li className="text-lg leading-relaxed text-black">
                  It helps to review student's exam questions.
                </li>
                <li className="text-lg leading-relaxed text-black">
                  This feature helps all correct answers and double check them
                  for accuracy.​
                </li>
              </ul>
            </div>
          </div>
          <div className={cn("relative h-96 w-full")}>
            <Image src="/feature/Answer_Key.png" alt="kkj" fill />
          </div>
        </div>
      </div>

      <div className="space-y-7 pt-12">
        <div className="grid items-center gap-x-3 gap-y-3 md:grid-cols-2">
          <div className="order-2 space-y-5">
            <H4 className="font-bold">Uses of Survey Branching</H4>
            <P>
              Piping text can be carried over to the immediate next question
              with the help of a piping variable.
            </P>
            <P>
              If you want the selected option from the Q1 question to appear in
              the Q2 text, use the $Q1 question code syntax in the Q2 question.
            </P>
            <div className="space-y-5">
              <div className="">
                <P className="font-semibold">Reusable text: </P>
                <P className="text-justify">
                  As the piped text is stored in a variable that can be used in
                  the same survey, it reduces the need to type the text again.
                  Such coding also simplifies the design of the questionnaire.
                </P>
              </div>
              <div className="">
                <P className="font-semibold">
                  Piping can be used in two different ways:
                </P>
                <P className="text-justify">
                  With Question Piping, you re-use an answer in a subsequent
                  question​ With Answer Piping, you re-use an answer in a
                  subsequent answer
                </P>
              </div>
            </div>
          </div>
          <div className={cn("relative order-1 h-96 w-full")}>
            <Image src="/feature/piping.png" alt="kkj" fill />
          </div>
        </div>
      </div>

      <div className="space-y-7 pt-12">
        <div className="grid items-center gap-x-3 gap-y-3 md:grid-cols-2">
          <div className="order-1 space-y-5">
            <H4 className="font-bold">Uses of Net Promoter Score(NPS)</H4>
            <div className="">
              <ul className="mt-10 list-disc space-y-3 pl-5">
                <li className="text-lg leading-relaxed text-black">
                  You can use an NPS question to get ratings for products or
                  services, website, store, or customer support.
                </li>
                <li className="text-lg leading-relaxed text-black">
                  You can combine the NPS question with an open-ended text
                  question to let respondents share their detailed feedback.
                  They can let businesses know more about their expectations and
                  improvement areas.
                </li>
                <li className="text-lg leading-relaxed text-black">
                  A good NPS score also implies that your current customers are
                  likely to buy your products in the future as well. It enables
                  you to forecast future sales and plan your actions
                  accordingly.
                </li>
              </ul>
            </div>
          </div>
          <div className={cn("relative order-2 h-96 w-full")}>
            <Image src="/feature/netpromoter.png" alt="kkj" fill />
          </div>
        </div>
      </div>

      <div className="space-y-7 pt-12">
        <div className="grid items-center gap-x-3 gap-y-3 md:grid-cols-2">
          <div className="order-2 space-y-5">
            <H4 className="font-bold">Uses of Dynamic Category</H4>
            <div className="">
              <ul className="mt-10 list-disc space-y-3 pl-5">
                <li className="text-lg leading-relaxed text-black">
                  Dynamic Category is more exclusive for the respondent, which
                  makes it more powerful and easy to respond.
                </li>
                <li className="text-lg leading-relaxed text-black">
                  In this way, the survey becomes shorter and easy to respond
                  for the customers, which motivates them to complete the
                  survey, ultimately increasing the response rate.
                </li>
                <li className="text-lg leading-relaxed text-black">
                  Dynamic Categories are a powerful way to ask for feedback from
                  your customers interactively.
                </li>
              </ul>
            </div>
          </div>
          <div className={cn("relative order-1 h-96 w-full")}>
            <Image src="/feature/Dynamic_category.png" alt="kkj" fill />
          </div>
        </div>
      </div> */}
      {/* 
      <div className="space-y-7 pt-12">
        <div className="grid items-center gap-x-3 gap-y-3 md:grid-cols-2">
          <div className="order-1 space-y-5">
            <H4 className="font-bold">Uses of the Dynamic Text</H4>
            <div className="">
              <ul className="mt-10 list-disc space-y-3 pl-5">
                <li className="text-lg leading-relaxed text-black">
                  Collect supporting data: This feature enables respondents to
                  submit an answer that is not mentioned in the survey.
                </li>
                <li className="text-lg leading-relaxed text-black">
                  Avoid missing out any possibilities: It is not always
                  practical to add all the possible answer options. Adding
                  dynamic text enables respondents to enter such options.
                </li>
              </ul>
            </div>
          </div>
          <div className={cn("relative order-2 h-96 w-full")}>
            <Image src="/feature/dynamic_text.png" alt="kkj" fill />
          </div>
        </div>
      </div>

      <div className="space-y-7 pt-12">
        <div className="grid items-center gap-x-3 gap-y-3 md:grid-cols-2">
          <div className="order-2 space-y-5">
            <H4 className="font-bold">Uses of Recurring</H4>
            <div className="">
              <ul className="mt-10 list-disc space-y-3 pl-5">
                <li className="text-lg leading-relaxed text-black">
                  Scheduling a recurrence makes it easier to regularly send a
                  survey to the same group on a schedule: Daily, weekly,
                  quarterly, or even the first Monday of every month. Configure
                  this just once so your automated surveys will go out on
                  schedule.
                </li>
                <li className="text-lg leading-relaxed text-black">
                  Typically an email invitation allows one response per contact.
                  With the recurring schedule enabled, once the specified
                  increment has passed, respondents can access the original link
                  in their invitation and will begin a new response.
                </li>
              </ul>
            </div>
          </div>
          <div className={cn("relative order-1 h-96 w-full")}>
            <Image src="/feature/recurring.png" alt="kkj" fill />
          </div>
        </div>
      </div>

      <div className="space-y-7 pt-12">
        <div className="grid items-center gap-x-3 gap-y-3 md:grid-cols-2">
          <div className="order-1 space-y-5">
            <H4 className="font-bold">Uses of Mobile and Offline Survey</H4>
            <div className="">
              <ul className="mt-10 list-disc space-y-3 pl-5">
                <li className="text-lg leading-relaxed text-black">
                  ZettaSurvey App Offline Surveys: With the ZettaSurvey app, you
                  can conduct these surveys on Apple and Android devices, even
                  when offline. The data is collected and stored on the device
                  and is synced with your Zettasurvey account whenever online
                  connectivity is available.
                </li>
                <li className="text-lg leading-relaxed text-black">
                  How do I connect my device to my Zettasurvey account?
                </li>
              </ul>
              <div className="pt-4">
                <Link href={"/"} className="flex gap-2">
                  <Image
                    src="/feature/playstore.png"
                    alt="mk"
                    width={30}
                    height={20}
                  />
                  <P>Download app from Android Apps on Google Play</P>
                </Link>
                <Link href={"/"} className="flex gap-2 pt-4">
                  <Image
                    src="/feature/playstore.png"
                    alt="mk"
                    width={30}
                    height={20}
                  />
                  <P>Download app from the App Store</P>
                </Link>
              </div>
              <ul className="list-disc space-y-3 pl-5 pt-4">
                <li className="text-lg leading-relaxed text-black">
                  Download and install the app on your mobile device. Open the
                  app and Enter your username/key and click login to take
                  offline survey .
                </li>
              </ul>
            </div>
          </div>
          <div className={cn("relative order-2 ml-40 flex h-[500px] w-80")}>
            <Image src="/feature/offline_survey.png" alt="kkj" fill />
          </div>
        </div>
      </div>

      <div className="space-y-7 pt-12">
        <div className="grid items-center gap-x-3 gap-y-3 md:grid-cols-2">
          <div className="order-2 space-y-5">
            <H4 className="font-bold">Uses of Dynamic URL</H4>
            <div className="">
              <ul className="mt-10 list-disc space-y-3 pl-5">
                <li className="text-lg leading-relaxed text-black">
                  Your survey link is the perfect way to share your survey
                  anywhere to collect responses for a great research.
                </li>
                <li className="text-lg leading-relaxed text-black">
                  For each survey there is a unique URL (link).
                </li>
                <li className="text-lg leading-relaxed text-black">
                  You can post this link on multiple websites/pages as you wish.
                  But please note the responses collected will be anonymous.
                </li>
              </ul>
            </div>
          </div>
          <div className={cn("relative order-1 h-96 w-full")}>
            <Image src="/feature/dynamic_url.png" alt="kkj" fill />
          </div>
        </div>
      </div>

      <div className="space-y-7 pt-12">
        <div className="grid items-center gap-x-3 gap-y-3 md:grid-cols-2">
          <div className="order-1 space-y-5">
            <H4 className="font-bold">Uses of Dynamic URL</H4>
            <div className="">
              <ul className="mt-10 list-disc space-y-3 pl-5">
                <li className="text-lg leading-relaxed text-black">
                  One of the most popular ways to distribute surveys to
                  potential respondents is through email invitation. Email
                  invitations are highly customizable and gives you the ability
                  to create templates that can be used for a specific survey or
                  across all the surveys.
                </li>
                <li className="text-lg leading-relaxed text-black">
                  You can create your own email templates (survey specific and
                  global) and use them while sending out the survey
                </li>
                <li className="text-lg leading-relaxed text-black">
                  you can either create new template or select an existing email
                  template that you have created from survey email templates.
                </li>
              </ul>
            </div>
          </div>
          <div className={cn("relative order-2 ml-40 h-96 w-80")}>
            <Image src="/feature/email_survey.png" alt="kkj" fill />
          </div>
        </div>
      </div> */}
{/* 
      <div className="space-y-7 pt-12">
        <div className="grid items-center gap-x-3 gap-y-3 md:grid-cols-2">
          <div className="order-2 space-y-5">
            <H4 className="font-bold">Uses of Survey Dashboard and Report</H4>
            <P>
              We provide a real-time dashboard for your survey. As soon as you
              start collecting responses, real-time data with analysis is
              available on the survey dashboard.
            </P>

            <div className="space-y-5">
              <div className="">
                <P className="font-semibold">Design: </P>
                <P className="text-justify">
                  Here you can customize the theme of the dashboard.​
                </P>
              </div>
              <div className="">
                <P className="font-semibold">Display:</P>
                <P className="text-justify">
                  By default, all questions are shown in the report. You can
                  show or hide and reorder the questions.
                </P>
              </div>
              <div className="">
                <P className="font-semibold">Filters:</P>
                <P className="text-justify">
                  By default, the survey status filter is set to all responses.
                  You can add additional filters and the dashboard will be
                  updated in real-time.
                </P>
              </div>
            </div>
            <P>
              Depending on your license level there is a limit to the number of
              dashboards that you can create.
            </P>
          </div>
          <div className={cn("relative order-1 h-96 w-full")}>
            <Image src="/feature/dashboard.png" alt="kkj" fill />
          </div>
        </div>
      </div>

      <div className="space-y-7 pt-12">
        <div className="grid items-center gap-x-3 gap-y-3 md:grid-cols-2">
          <div className="order-1 space-y-5">
            <H4 className="font-bold">Uses of Roles and Permissions</H4>
            <div className="">
              <ul className="mt-10 list-disc space-y-3 pl-5">
                <li className="text-lg leading-relaxed text-black">
                  A user role represents a collection of users that are assigned
                  permissions by an administrator to perform similar actions or
                  functions.
                </li>
                <li className="text-lg leading-relaxed text-black">
                  There are two standard roles named User and Super Admin added
                  by default to every ZettaSurvey organization which are not
                  editable/deletable.
                </li>
                <li className="text-lg leading-relaxed text-black">
                  The super admin can add new custom roles and assign it to
                  other users.
                </li>
                <li className="text-lg leading-relaxed text-black">
                  The super admin can also provide permission to add new users
                  to other users by selecting the user management permissions
                  while creating a role.
                </li>
              </ul>
            </div>
          </div>
          <div className={cn("relative order-2 h-96 w-full")}>
            <Image src="/feature/roles_permission.png" alt="kkj" fill />
          </div>
        </div>
      </div>

      <div className="space-y-7 pt-12">
        <div className="grid items-center gap-x-3 gap-y-3 md:grid-cols-2">
          <div className="order-2 space-y-5">
            <H4 className="font-bold">Uses of User Management</H4>
            <div className="">
              <ul className="mt-10 list-disc space-y-3 pl-5">
                <li className="text-lg leading-relaxed text-black">
                  The user permissions are the access to the features given to
                  the user within their ZettaSurvey account.
                </li>
                <li className="text-lg leading-relaxed text-black">
                  User management allows Add users, Edit users, Delete users,
                  Add Roles, Delete Roles.
                </li>
                <li className="text-lg leading-relaxed text-black">
                  You can add list of users and download list of users.​
                </li>
                <li className="text-lg leading-relaxed text-black">
                  You can assign a single role to multiple users .​
                </li>
                <li className="text-lg leading-relaxed text-black">
                  You can edit a role or update some permissions for a role.​
                </li>
                <li className="text-lg leading-relaxed text-black">
                  You can assign the custom role to an existing user
                </li>
              </ul>
            </div>
          </div>
          <div className={cn("relative order-1 h-96 w-full")}>
            <Image src="/feature/user_management.png" alt="kkj" fill />
          </div>
        </div>
      </div>

      <div className="space-y-7 pt-12">
        <div className="grid items-center gap-x-3 gap-y-3 md:grid-cols-2">
          <div className="order-1 space-y-5">
            <H4 className="font-bold">Uses of White-label surveys</H4>
            <P>
              White-label your surveys and maintain brand identity. Use CSS to
              style surveys just the way you want. Employ custom domain to share
              surveys from your domain and establish trust with respondents.
              Customize your email surveys and share them with customers. Make
              surveys truly your own. No hint of ZettaSurvey.
            </P>
          </div>
          <div className={cn("relative order-2 h-96 w-full")}>
            <Image src="/feature/white_label.png" alt="kkj" fill />
          </div>
        </div>
      </div> */}
    </div>
  );
}
