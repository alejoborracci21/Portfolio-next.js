import React from "react";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";
import { Typography } from "@mui/material";

interface Job {
  name: string;
  position: string;
  date: string;
  description: string;
}

interface TimelineProps {
  jobs: Job[];
}

const Experience: React.FC<TimelineProps> = ({ jobs }) => {
  return (
    <Timeline position="alternate">
      {jobs.map((job, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot style={{ backgroundColor: '#e3194d' }} />
            {index < jobs.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h4" className="text-white mb-2">{job.name}</Typography>
            <Typography variant="h5" className="text-white mb-4"> {job.position}</Typography>
            <Typography variant="subtitle2" className="text-[#898989] mb-4">{job.date}</Typography>
            <Typography variant="body2" className="text-[#898989]">{job.description}</Typography>
          </TimelineContent>
        </TimelineItem>

      ))}
    </Timeline>

  );
};


export default Experience;

