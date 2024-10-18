import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IconType } from "react-icons/lib";

interface PatientFirst {
  id: number;
  title: string;
  icon: IconType;
  description: string;
}

interface PatientSecond {
  id: number;
  title: string;
  icon: IconType;
  description: string;
}

interface PatientCareDesignProps {
  patientFirstData: PatientFirst[];
  patientSecondData: PatientSecond[];
}

export function PatientCareDesign({
  patientFirstData,
  patientSecondData,
}: PatientCareDesignProps) {
  return (
    <>
      <div className="grid gap-4">
        {patientSecondData.map((item) => (
          <Card key={item.id}>
            <CardHeader className="flex items-center gap-3">
              <item.icon size={25} />
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-justify">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* <div className="grid grid-cols-4 gap-4">
        {patientFirstData.map((item) => (
          <Card key={item.id} className="">
            <CardHeader
              className={`${item.ind % 2 === 0 && "order-2 justify-self-end"}`}
            >
            </CardHeader>
            <CardContent className={`${item.ind % 2 === 0 && "order-1"}`}>
              <CardTitle>{item.title}</CardTitle>
              <p className="text-justify">{item.content1}</p>
              <p className="text-justify">{item.content2}</p>
              <p className="text-justify">{item.content3}</p>
            </CardContent>
          </Card>
        ))}
      </div> */}
    </>
  );
}
