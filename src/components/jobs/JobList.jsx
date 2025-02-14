import React, { useState, useEffect } from "react";
import {
  Briefcase,
  Building,
  MapPin,
  Search,
  DollarSign,
  Bookmark,
  ExternalLink,
  X,
} from "lucide-react";

const jobs = [
  {
    jobId: "1",
    title: "Data Analyst",
    company: "Norstella",
    location: "Remote",
    description:
      "Each organization (Citeline, Evaluate, MMIT, Panalgo, The Dedham Group) delivers must-have answers for critical strategic and commercial decision-making.",
    tasks: ["Evaluate – bring the right drugs to market."],
    category: "Full-time",
    benefits: [
      "Health insurance",
      "Life insurance",
      "Provident Fund",
      "Work from home",
    ],
    aboutCompany:
      "At Norstella, our mission is simple: to help our clients bring life-saving therapies to market quicker—and help patients in need.",
    tags: "Data Analysis, Healthcare, Remote",
  },
  {
    jobId: "2",
    title: "Business Analyst Track & Trace",
    company: "Sandoz",
    location: "India",
    description:
      "Keeps abreast with internal Technology systems and documentation requirements, standards (including quality management and IT security), regulatory environments / requirements (if applicable),...",
    category: "Full-time",
    salary: "Not disclosed",
    postedAt: "Posted recently",
    tags: "Business Analysis, Technology, Quality Management",
  },
];

const JobDetailView = ({ job, isVisible, onClose }) => (
  <div
    className={`fixed md:relative inset-0 md:inset-auto z-50 md:z-0 ${
      isVisible ? "block" : "hidden md:block"
    }`}
  >
    <div className="flex-1 h-full md:h-auto overflow-y-auto bg-white dark:bg-background-dark p-4 md:p-6 md:rounded-lg shadow-sm">
      <div className="md:hidden flex justify-end mb-4">
        <button onClick={onClose} className="p-2">
          <X className="w-6 h-6 text-text-primary dark:text-text-dark_primary" />
        </button>
      </div>

      <div className="flex-1 bg-white dark:bg-background-dark p-6 rounded-lg shadow-sm">
        <div className="max-w-3xl">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-text-primary dark:text-text-dark_primary">
                {job.title}
              </h1>
              <div className="flex items-center mt-2">
                <span className="text-primary dark:text-primary-dark">
                  {job.company}
                </span>
                <span className="mx-2 text-text-tertiary dark:text-text-dark_tertiary">
                  •
                </span>
                <span className="flex items-center text-text-secondary dark:text-text-dark_secondary">
                  <MapPin className="w-4 h-4 mr-1" />
                  {job.location}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-2 rounded-lg border border-border-DEFAULT hover:bg-hover-DEFAULT dark:border-border-dark dark:hover:bg-hover-dark">
                <Bookmark className="w-5 h-5 text-text-primary dark:text-text-dark_primary" />
              </button>
              <button className="p-2 rounded-lg border border-border-DEFAULT hover:bg-hover-DEFAULT dark:border-border-dark dark:hover:bg-hover-dark">
                <ExternalLink className="w-5 h-5 text-text-primary dark:text-text-dark_primary" />
              </button>
            </div>
          </div>

          <button className="mt-6 bg-primary hover:bg-primary-hover dark:bg-primary-dark dark:hover:bg-primary-dark_hover text-white px-6 py-3 rounded-lg">
            Apply now
          </button>

          <div className="mt-8 space-y-6">
            <section>
              <h2 className="text-lg font-semibold mb-2 text-text-primary dark:text-text-dark_primary">
                Job details
              </h2>
              <div className="bg-surface-100 dark:bg-hover-dark p-4 rounded-lg">
                <span className="text-text-tertiary dark:text-text-dark_tertiary">
                  Job type
                </span>
                <div className="font-medium mt-1 text-text-primary dark:text-text-dark_primary">
                  {job.category}
                </div>
              </div>
            </section>

            {job.benefits && (
              <section>
                <h2 className="text-lg font-semibold mb-2 text-text-primary dark:text-text-dark_primary">
                  Benefits
                </h2>
                <div className="bg-surface-100 dark:bg-hover-dark p-4 rounded-lg">
                  <ul className="space-y-2">
                    {job.benefits.map((benefit, index) => (
                      <li
                        key={index}
                        className="text-text-tertiary dark:text-text-dark_tertiary"
                      >
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            <section>
              <h2 className="text-lg font-semibold mb-2 text-text-primary dark:text-text-dark_primary">
                Full job description
              </h2>
              <div className="bg-surface-100 dark:bg-hover-dark p-4 rounded-lg">
                {job.aboutCompany && (
                  <>
                    <h3 className="font-medium mb-2 text-text-primary dark:text-text-dark_primary">
                      About {job.company}
                    </h3>
                    <p className="mb-4 text-text-tertiary dark:text-text-dark_tertiary">
                      {job.aboutCompany}
                    </p>
                  </>
                )}
                <p className="text-text-tertiary dark:text-text-dark_tertiary">
                  {job.description}
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const JobCard = ({ job, isSelected, onClick }) => (
  <div
    onClick={onClick}
    className={`border rounded-lg cursor-pointer transition-all duration-100 ${
      isSelected
        ? "border-primary dark:border-primary-dark bg-primary-50 dark:bg-primary-900"
        : "border-border-DEFAULT dark:border-border-dark bg-white dark:bg-background-dark hover:bg-hover-DEFAULT dark:hover:bg-hover-dark"
    }`}
  >
    <div className="p-5">
      <div className="flex justify-between items-start">
        <div className="flex gap-3">
          <div className="w-12 h-12 flex items-center justify-center bg-surface-100 dark:bg-hover-dark rounded-lg">
            <Building className="w-6 h-6 text-primary dark:text-primary-dark" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-text-primary dark:text-text-dark_primary">
              {job.title}
            </h3>
            <p className="text-text-secondary dark:text-text-dark_secondary flex items-center mt-1">
              {job.company} <span className="mx-2">•</span>
              <MapPin className="w-4 h-4 mr-1" /> {job.location}
            </p>
          </div>
        </div>
      </div>
      <p className="mt-4 text-text-tertiary dark:text-text-dark_tertiary line-clamp-2">
        {job.description}
      </p>
      <div className="mt-4 flex gap-2 flex-wrap">
        {job.tags?.split(",").map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-surface-100 dark:bg-hover-dark rounded-full text-sm text-text-tertiary dark:text-text-dark_tertiary"
          >
            {tag.trim()}
          </span>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-border-DEFAULT dark:border-border-dark flex justify-between items-center">
        <span className="flex items-center text-text-tertiary dark:text-text-dark_tertiary">
          <Briefcase className="w-4 h-4 mr-1" /> {job.category}
        </span>
        {job.salary && (
          <span className="flex items-center text-text-tertiary dark:text-text-dark_tertiary">
            <DollarSign className="w-4 h-4 mr-1" /> {job.salary}
          </span>
        )}
        {job.postedAt && (
          <span className="text-text-tertiary dark:text-text-dark_tertiary">
            {job.postedAt}
          </span>
        )}
      </div>
    </div>
  </div>
);

const JobList = () => {
  const [selectedJob, setSelectedJob] = useState(jobs[0]);
  const [showDetail, setShowDetail] = useState(false);

  const handleJobSelect = (job) => {
    setSelectedJob(job);
    setShowDetail(true);
  };

  return (
    <div className="min-h-screen bg-background-DEFAULT dark:bg-background-darker">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white dark:bg-background-dark rounded-lg shadow-sm p-4 md:p-6 mb-6 mt-10">
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-text-primary dark:text-text-dark_primary mb-2">
              Find your next opportunity
            </h2>
            <p className="text-sm md:text-base text-text-secondary dark:text-text-dark_secondary">
              Search jobs that match your skills and experience
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Job title, keywords, or company"
                className="w-full pl-10 pr-4 py-3 border rounded-lg bg-white dark:bg-hover-dark border-border-DEFAULT dark:border-border-dark text-text-primary dark:text-text-dark_primary placeholder-text-muted dark:placeholder-text-dark_muted focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-transparent transition-all"
              />
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-text-muted dark:text-text-dark_muted" />
            </div>
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Location"
                className="w-full pl-10 pr-4 py-3 border rounded-lg bg-white dark:bg-hover-dark border-border-DEFAULT dark:border-border-dark text-text-primary dark:text-text-dark_primary placeholder-text-muted dark:placeholder-text-dark_muted focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark focus:border-transparent transition-all"
              />
              <MapPin className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-text-muted dark:text-text-dark_muted" />
            </div>
            <button className="w-full md:w-auto px-8 py-3 bg-primary hover:bg-primary-hover dark:bg-primary-dark dark:hover:bg-primary-dark_hover text-white rounded-lg font-medium transition-colors">
              Find jobs
            </button>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between pt-4 border-t border-border-DEFAULT dark:border-border-dark">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-4 md:mb-0">
              <div>
                <p className="text-text-secondary dark:text-text-dark_secondary text-sm">
                  Resume status
                </p>
                <p className="text-text-tertiary dark:text-text-dark_tertiary text-xs mt-1">
                  Add your resume to get better jobs opportunities
                </p>
              </div>
              <div>
                <p className="text-text-secondary dark:text-text-dark_secondary text-sm">
                  Job alerts
                </p>
                <p className="text-text-tertiary dark:text-text-dark_tertiary text-xs mt-1">
                  Get notified for similar jobs
                </p>
              </div>
            </div>
            <button className="text-primary dark:text-primary-dark hover:text-primary-hover dark:hover:text-primary-dark_hover text-sm font-medium">
              Upload/Update Resume →
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <div className="space-y-4">
              {jobs.map((job) => (
                <JobCard
                  key={job.jobId}
                  job={job}
                  isSelected={selectedJob.jobId === job.jobId}
                  onClick={() => handleJobSelect(job)}
                />
              ))}
            </div>
          </div>
          <JobDetailView
            job={selectedJob}
            isVisible={showDetail}
            onClose={() => setShowDetail(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default JobList;
