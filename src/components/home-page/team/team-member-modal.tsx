import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import ExportedImage from "next-image-export-optimizer";
import Close from "@/public/icons/close.svg";
import Star from "@/public/icons/star.svg";
import DummyProfile from "@/public/images/ui/dummy-profile.png";
import Link from "next/link";

interface Member {
  name: string;
  title: string;
  image: any;
  bio?: string;
  experience?: string;
  certificates?: string;
  skills?: string;
  location?: string;
  phone?: string;
  email?: string;
}

interface Props {
  open: boolean;
  member: Member | null;
  onClose: () => void;
}

const modalRoot = typeof window !== "undefined" ? document.body : null;

const TeamMemberModal: React.FC<Props> = ({ open, member, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  //   useEffect(() => {
  //     if (open && modalRef.current) {
  //       gsap.fromTo(
  //         modalRef.current,
  //         { y: 60, opacity: 0 },
  //         { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" },
  //       );
  //     }
  //     return () => {
  //       if (modalRef.current) {
  //         gsap.to(modalRef.current, {
  //           y: 60,
  //           opacity: 0,
  //           duration: 0.25,
  //           ease: "power2.in",
  //         });
  //       }
  //     };
  //   }, [open]);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
      if (modalRef.current) {
        gsap.fromTo(
          modalRef.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" },
        );
      }
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    const currentModal = modalRef.current;
    return () => {
      document.body.classList.remove("overflow-hidden");
      if (currentModal) {
        gsap.to(currentModal, {
          y: 60,
          opacity: 0,
          duration: 0.25,
          ease: "power2.in",
        });
      }
    };
  }, [open]);

  if (!open || !member || !modalRoot) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-[75.6875rem] overflow-hidden rounded-[.875rem] bg-white shadow-xl"
        style={{ maxHeight: "90vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="border-card-border sticky top-0 z-10 flex w-full items-center justify-between border-b p-5 md:px-6 md:pt-6 md:pb-5">
          <div className="flex items-center justify-center gap-5 sm:gap-6">
            <div className="border-card-border flex size-[2.5625rem] items-center justify-center rounded-[.625rem] border shadow-2xl sm:size-12">
              <ExportedImage
                src={DummyProfile}
                alt={"dummy-profile"}
                width={30}
                height={30}
              />
            </div>

            <p className="text-body-primary font-semibold sm:text-lg">
              Profile Detail
            </p>
          </div>

          <button
            className="cursor-pointer"
            onClick={onClose}
            aria-label="Close"
          >
            <ExportedImage src={Close} alt="close-modal-icon" />
          </button>
        </div>

        {/* Content */}
        <div
          className="flex flex-col gap-[1.1875rem] overflow-y-auto px-5 py-[1.6875rem] sm:px-6 md:flex-row-reverse md:py-9"
          style={{ maxHeight: "calc(90vh - 93px)" }}
        >
          {/*  */}
          <div className="w-full max-w-[22.875rem] leading-tight">
            <p className="text-accent text-[2rem] font-semibold md:text-[2.5rem]">
              {member?.name}
            </p>
            <p className="text-body-primary md:text-xl">{member?.title}</p>

            <ExportedImage
              src={member?.image}
              alt={`${member?.name} - image`}
              className="mt-3 rounded-[1.375rem]"
            />
          </div>

          <div className="flex-1">
            {/* Biography */}
            <div className="border-card-border mb-[.875rem] rounded-2xl border">
              <div className="text-accent border-card-border border-b px-[1.1875rem] py-3 leading-none font-bold md:px-[1.375rem] md:text-lg">
                <p className="underline underline-offset-14">Biography</p>
              </div>

              <div className="text-body-main flex items-start gap-3 px-[1.1875rem] py-7 text-xs leading-tight sm:px-[1.375rem] sm:text-sm">
                <ExportedImage src={Star} alt="star-icon" />
                <p>{member.bio}</p>
              </div>
            </div>

            {/* Details */}
            <div className="border-card-border rounded-2xl border">
              <div className="text-accent border-card-border border-b px-[1.1875rem] py-3 leading-none font-bold sm:px-[1.375rem] md:text-lg">
                <p className="underline underline-offset-14">Details</p>
              </div>

              <div className="space-y-3 px-[1.1875rem] py-7 sm:px-[1.375rem] lg:space-y-5">
                <div className="member-detail-info-container">
                  <span className="member-detail-tile">Occupation:</span>
                  <span className="member-detail-info">{member?.title}</span>
                </div>

                <div className="member-detail-info-container">
                  <span className="member-detail-tile">Experience:</span>
                  <span className="member-detail-info member-detail-tile">
                    {member?.experience}
                  </span>
                </div>

                <div className="member-detail-info-container">
                  <span className="member-detail-tile">Certificates:</span>
                  <span className="member-detail-info">
                    {member?.certificates}
                  </span>
                </div>

                <div className="member-detail-info-container">
                  <span className="member-detail-tile">Skills:</span>
                  <span className="member-detail-info">{member?.skills}</span>
                </div>

                <div className="member-detail-info-container">
                  <span className="member-detail-tile">Location:</span>
                  <span className="member-detail-info">{member?.location}</span>
                </div>

                <div className="member-detail-info-container">
                  <span className="member-detail-tile">Phone:</span>
                  <Link
                    href={`tel:${member?.phone}`}
                    className="member-detail-info"
                  >
                    {member?.phone}
                  </Link>
                </div>

                <div className="member-detail-info-container">
                  <span className="member-detail-tile">Email:</span>
                  <Link
                    href={`mailto:${member?.email}`}
                    className="member-detail-info"
                  >
                    {member?.email}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    modalRoot,
  );
};

export default TeamMemberModal;
