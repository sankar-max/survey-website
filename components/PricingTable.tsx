import { features, featuresfrist, featuressecond } from '@/data/pricing'
import React from 'react'
import { BsCheckCircleFill } from 'react-icons/bs'
export default function PricingTable() {
  return (
    <div className="table-bg-image p-10 capitalize">
      <h1 className="mt-3 text-center text-[40px] font-bold capitalize">
        features table
      </h1>

      <div className="mx-auto mb-7 h-[3px] w-[100px] rounded-lg bg-purple-600"></div>

      <table className="min-w-full">
        <thead className="sticky top-[70px] bg-[#7FE9DE] capitalize text-black">
          <tr>
            <th className="px-10 py-3">Features List</th>
            <th className="px-10 py-3">Professional</th>
            <th className="px-10 py-3">Business</th>
            <th className="px-10 py-3">Enterprise</th>
          </tr>
        </thead>
        <tbody className="h-[0px] overflow-hidden border-b border-l border-r">
          {features.map((feature, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-slate-100" : ""}>
              <td className="px-3 py-3">{feature.name}</td>
              <td className="px-3 py-3">
                {feature.professional ? (
                  <BsCheckCircleFill className="mx-auto text-green-500" />
                ) : null}
              </td>
              <td className="px-3 py-3">
                {feature.business ? (
                  <BsCheckCircleFill className="mx-auto text-green-500" />
                ) : null}
              </td>
              <td className="px-3 py-3">
                {feature.enterprise ? (
                  <BsCheckCircleFill className="mx-auto text-green-500" />
                ) : null}
              </td>
            </tr>
          ))}
          <tr>
            <th
              colSpan={5}
              className="sticky top-[118px] bg-[#A5F1E9] py-3 uppercase text-black"
            >
              question type
            </th>
          </tr>
          {featuresfrist.map((feature, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-slate-100" : ""}>
              <td className="px-3 py-3">{feature.name}</td>
              <td className="px-3 py-3">
                {feature.professional ? (
                  <BsCheckCircleFill className="mx-auto text-green-500" />
                ) : null}
              </td>
              <td className="px-3 py-3">
                {feature.business ? (
                  <BsCheckCircleFill className="mx-auto text-green-500" />
                ) : null}
              </td>
              <td className="px-3 py-3">
                {feature.enterprise ? (
                  <BsCheckCircleFill className="mx-auto text-green-500" />
                ) : null}
              </td>
            </tr>
          ))}
          <tr>
            <th
              className="sticky top-[118px] bg-[#FFF6BF] py-3 uppercase"
              colSpan={5}
            >
              logic
            </th>
          </tr>
          {featuressecond.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-slate-100" : ""}>
              <td className="px-3 py-3">{row.question}</td>
              {row.validations.map((isValid, idx) => (
                <td key={idx} className="px-3 py-3">
                  {isValid ? (
                    <BsCheckCircleFill className="mx-auto text-green-500" />
                  ) : null}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

 
