"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import {
	Call02Icon,
	Mail01Icon,
	Clock01Icon,
	CheckmarkCircle02Icon,
	ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import { Input } from "@workspace/ui/components/input";
import { Textarea } from "@workspace/ui/components/textarea";
import { Label } from "@workspace/ui/components/label";
import { cn } from "@workspace/ui/lib/utils";
import { BPO_SERVICES_CATALOG } from "@/components/marketing/services/services-data";

type InquiryIntent = "proposal" | "careers" | "general";

const INTENT_TABS: { value: InquiryIntent; label: string }[] = [
	{ value: "proposal", label: "Client Scoping & Proposal" },
	{ value: "careers", label: "Careers & Talent" },
	{ value: "general", label: "General & Media" },
];

const SEAT_TIERS = [
	"3–5 FTE",
	"6–15 FTE",
	"16–50 FTE",
	"50+ Enterprise",
];

const COVERAGE_MODES = [
	"Regional Business Hours",
	"Extended (16/5)",
	"24/7 Follow-the-Sun",
];

const CAREER_HUBS = [
	"New York HQ",
	"London EMEA",
	"Singapore APAC",
	"Manila Hub",
	"Remote Cohort",
];

const CAREER_ROLES = [
	"Customer Experience Specialist",
	"Technical Support Engineer",
	"Outbound SDR Associate",
	"QA & Training Coach",
	"Operations Team Lead",
];

const NEXT_STEPS = [
	{
		step: "01",
		title: "15-Minute Triage",
		detail: "Your scoping brief routes straight to a senior solutions director — never a generic automated queue.",
	},
	{
		step: "02",
		title: "Same-Day Workflow Sync",
		detail: "We hold a focused 30-minute audit of your handle times, volume curves, and SLA benchmarks.",
	},
	{
		step: "03",
		title: "24-Hour Pod Proposal",
		detail: "You receive a structured staffing blueprint, QA governance framework, and transparent monthly pricing.",
	},
];

export function ContactFormSection() {
	const searchParams = useSearchParams();
	const serviceParam = searchParams.get("service");
	const intentParam = searchParams.get("intent");

	const [intent, setIntent] = React.useState<InquiryIntent>(() => {
		if (intentParam === "careers") return "careers";
		if (intentParam === "general") return "general";
		return "proposal";
	});

	const [selectedService, setSelectedService] = React.useState<string>(() => {
		const found = BPO_SERVICES_CATALOG.find((s) => s.id === serviceParam);
		return found ? found.id : "customer-experience";
	});
	const [seatTier, setSeatTier] = React.useState<string>("6–15 FTE");
	const [coverageMode, setCoverageMode] = React.useState<string>("24/7 Follow-the-Sun");
	const [careerHub, setCareerHub] = React.useState<string>("London EMEA");
	const [careerRole, setCareerRole] = React.useState<string>("Customer Experience Specialist");

	const [fullName, setFullName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [organization, setOrganization] = React.useState("");
	const [portfolioUrl, setPortfolioUrl] = React.useState("");
	const [topic, setTopic] = React.useState("Executive Briefing");
	const [notes, setNotes] = React.useState("");
	const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
	const [isSubmitting, setIsSubmitting] = React.useState(false);
	const [receiptRef, setReceiptRef] = React.useState<string | null>(null);

	// Sync state cleanly if user navigates between ?service= or ?intent= links
	React.useEffect(() => {
		if (intentParam === "careers" || intentParam === "general") {
			setIntent(intentParam);
		} else if (serviceParam) {
			setIntent("proposal");
			const match = BPO_SERVICES_CATALOG.find((s) => s.id === serviceParam);
			if (match) setSelectedService(match.id);
		}
	}, [serviceParam, intentParam]);

	const activeServiceObj = BPO_SERVICES_CATALOG.find(
		(s) => s.id === selectedService
	);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setErrorMessage(null);

		if (!fullName.trim()) {
			setErrorMessage("Please enter your full name.");
			return;
		}
		if (!email.trim() || !email.includes("@")) {
			setErrorMessage("Please enter a valid work email address.");
			return;
		}
		if (intent === "proposal" && !organization.trim()) {
			setErrorMessage("Please provide your company or organization name.");
			return;
		}
		if (!notes.trim()) {
			setErrorMessage("Please share a brief summary so we can route your request accurately.");
			return;
		}

		setIsSubmitting(true);
		// Simulate brief handoff confirmation while strictly client-side
		setTimeout(() => {
			const randomCode = Math.floor(1000 + Math.random() * 9000);
			setReceiptRef(`AURA-${intent.toUpperCase().slice(0, 3)}-${randomCode}`);
			setIsSubmitting(false);
		}, 350);
	};

	const resetForm = () => {
		setReceiptRef(null);
		setNotes("");
		setErrorMessage(null);
	};

	return (
		<section className="w-full bg-background pt-12 sm:pt-16 lg:pt-20 pb-20 sm:pb-24 border-b border-border/60">
			<div className="mx-auto max-w-7xl xl:max-w-[1480px] px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-start">
					{/* ── Left Column: Editorial Lead-In, SLA Process & Direct Channels ── */}
					<div className="lg:col-span-5 flex flex-col">
						<span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-forest-surface dark:text-primary mb-3 block">
							Contact Operations
						</span>

						<h1 className="text-4xl sm:text-5xl font-bold font-heading tracking-tight text-foreground leading-[1.08] mb-5">
							Speak directly with our solutions directors.
						</h1>

						<p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 font-normal">
							Zero generic call loops or automated sales delays. Every operational brief is reviewed directly by a senior delivery lead.
						</p>

						{/* Direct Channels Ledger */}
						<div className="rounded-xl border border-border/75 bg-muted/25 divide-y divide-border/60 mb-10">
							<div className="p-4 sm:p-5 flex items-start gap-3.5">
								<div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-background border border-border/70 text-foreground">
									<HugeiconsIcon icon={Call02Icon} strokeWidth={2} className="size-4" />
								</div>
								<div>
									<span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground block">
										Enterprise Desk
									</span>
									<a
										href="tel:+18004822872"
										className="text-sm font-semibold text-foreground hover:text-forest-surface dark:hover:text-primary transition-colors mt-0.5 block"
									>
										+1 (800) 482-AURA
									</a>
								</div>
							</div>

							<div className="p-4 sm:p-5 flex items-start gap-3.5">
								<div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-background border border-border/70 text-foreground">
									<HugeiconsIcon icon={Mail01Icon} strokeWidth={2} className="size-4" />
								</div>
								<div>
									<span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground block">
										Client Scoping &amp; Proposals
									</span>
									<a
										href="mailto:enterprise@aura.com"
										className="text-sm font-semibold text-foreground hover:text-forest-surface dark:hover:text-primary transition-colors mt-0.5 block"
									>
										enterprise@aura.com
									</a>
								</div>
							</div>

							<div className="p-4 sm:p-5 flex items-start gap-3.5">
								<div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-background border border-border/70 text-foreground">
									<HugeiconsIcon icon={Clock01Icon} strokeWidth={2} className="size-4" />
								</div>
								<div>
									<span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground block">
										First-Response SLA
									</span>
									<span className="text-sm font-semibold text-foreground mt-0.5 block">
										Under 15 minutes during business coverage
									</span>
								</div>
							</div>
						</div>

						{/* What Happens Next Timeline */}
						<div>
							<span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground block mb-4">
								What Happens After Submission
							</span>
							<div className="space-y-4 border-l border-border/75 pl-4">
								{NEXT_STEPS.map((item) => (
									<div key={item.step}>
										<div className="flex items-baseline gap-2.5">
											<span className="font-mono text-xs font-bold text-forest-surface dark:text-primary">
												{item.step}
											</span>
											<h2 className="text-sm font-bold font-heading text-foreground">
												{item.title}
											</h2>
										</div>
										<p className="text-xs text-muted-foreground leading-relaxed mt-1">
											{item.detail}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* ── Right Column: Multi-Intent Architectural Form Panel ── */}
					<div className="lg:col-span-7 w-full">
						<div className="rounded-xl border border-border/75 bg-card p-6 sm:p-8 lg:p-10">
							{/* Intent Switcher Tabs (Architectural Underline Pattern) */}
							<div
								role="tablist"
								aria-label="Select inquiry type"
								className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-border/60 mb-8"
							>
								{INTENT_TABS.map((tab) => {
									const isActive = intent === tab.value;
									return (
										<button
											key={tab.value}
											role="tab"
											type="button"
											aria-selected={isActive}
											onClick={() => {
												setIntent(tab.value);
												setErrorMessage(null);
												setReceiptRef(null);
											}}
											className={cn(
												"pb-3 text-xs sm:text-sm font-medium border-b-2 transition-colors cursor-pointer whitespace-nowrap",
												isActive
													? "border-foreground text-foreground font-semibold dark:border-primary dark:text-primary"
													: "border-transparent text-muted-foreground hover:text-foreground"
											)}
										>
											{tab.label}
										</button>
									);
								})}
							</div>

							{/* ── Confirmation State Card ── */}
							{receiptRef ? (
								<div className="py-6 space-y-6">
									<div className="flex items-start gap-4">
										<div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
											<HugeiconsIcon
												icon={CheckmarkCircle02Icon}
												strokeWidth={2}
												className="size-6"
											/>
										</div>
										<div>
											<span className="font-mono text-xs uppercase tracking-wider text-forest-surface dark:text-primary font-bold block mb-1">
												Brief Logged • Ref {receiptRef}
											</span>
											<h2 className="text-2xl font-bold font-heading text-foreground">
												Thank you, {fullName}.
											</h2>
											<p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
												Your submission has been routed to our{" "}
												{intent === "proposal"
													? "Solutions Engineering Desk"
													: intent === "careers"
														? "People Excellence Team"
														: "Executive Operations Desk"}
												. Expect a direct response at <span className="text-foreground font-medium">{email}</span>.
											</p>
										</div>
									</div>

									<div className="rounded-lg border border-border/70 bg-muted/30 p-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
										<div>
											<span className="font-mono uppercase text-muted-foreground block mb-1">
												Routing Track
											</span>
											<span className="font-semibold text-foreground">
												{INTENT_TABS.find((t) => t.value === intent)?.label}
											</span>
										</div>
										{intent === "proposal" && (
											<>
												<div>
													<span className="font-mono uppercase text-muted-foreground block mb-1">
														Selected Practice
													</span>
													<span className="font-semibold text-foreground">
														{activeServiceObj?.title}
													</span>
												</div>
												<div>
													<span className="font-mono uppercase text-muted-foreground block mb-1">
														Capacity &amp; Shift
													</span>
													<span className="font-semibold text-foreground">
														{seatTier} • {coverageMode}
													</span>
												</div>
											</>
										)}
										{intent === "careers" && (
											<div>
												<span className="font-mono uppercase text-muted-foreground block mb-1">
													Target Role &amp; Hub
												</span>
												<span className="font-semibold text-foreground">
													{careerRole} ({careerHub})
												</span>
											</div>
										)}
										<div>
											<span className="font-mono uppercase text-muted-foreground block mb-1">
												SLA Window
											</span>
											<span className="font-semibold text-foreground">
												Within 15 minutes
											</span>
										</div>
									</div>

									<button
										type="button"
										onClick={resetForm}
										className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted transition-colors cursor-pointer"
									>
										Submit another inquiry
									</button>
								</div>
							) : (
								/* ── Active Multi-Intent Form ── */
								<form onSubmit={handleSubmit} noValidate className="space-y-6">
									{/* Common Identity Fields */}
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
										<div className="space-y-2">
											<Label htmlFor="contact-name">
												Full Name <span className="text-destructive">*</span>
											</Label>
											<Input
												id="contact-name"
												type="text"
												placeholder="Elena Rostova"
												value={fullName}
												onChange={(e) => setFullName(e.target.value)}
												className="h-11 px-3.5 border-border/80 bg-background"
												required
											/>
										</div>

										<div className="space-y-2">
											<Label htmlFor="contact-email">
												Work Email <span className="text-destructive">*</span>
											</Label>
											<Input
												id="contact-email"
												type="email"
												placeholder="elena@company.com"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
												className="h-11 px-3.5 border-border/80 bg-background"
												required
											/>
										</div>
									</div>

									{/* Intent 1: Proposal / Pod Scoping Fields */}
									{intent === "proposal" && (
										<>
											<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
												<div className="space-y-2">
													<Label htmlFor="contact-company">
														Company Name <span className="text-destructive">*</span>
													</Label>
													<Input
														id="contact-company"
														type="text"
														placeholder="PayPulse Global"
														value={organization}
														onChange={(e) => setOrganization(e.target.value)}
														className="h-11 px-3.5 border-border/80 bg-background"
														required
													/>
												</div>

												<div className="space-y-2">
													<Label htmlFor="contact-practice">
														Primary Practice
													</Label>
													<select
														id="contact-practice"
														value={selectedService}
														onChange={(e) => setSelectedService(e.target.value)}
														className="h-11 w-full rounded-lg border border-border/80 bg-background px-3.5 text-sm text-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
													>
														{BPO_SERVICES_CATALOG.map((service) => (
															<option key={service.id} value={service.id}>
																{service.number} — {service.title}
															</option>
														))}
													</select>
												</div>
											</div>

											{/* Capacity Tier Selector */}
											<div className="space-y-2.5">
												<Label>Estimated Seat Capacity</Label>
												<div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
													{SEAT_TIERS.map((tier) => (
														<button
															key={tier}
															type="button"
															onClick={() => setSeatTier(tier)}
															className={cn(
																"rounded-lg border px-3 py-2.5 text-xs font-semibold font-mono transition-colors cursor-pointer",
																seatTier === tier
																	? "border-forest bg-forest text-white dark:border-primary dark:bg-primary dark:text-primary-foreground"
																	: "border-border/75 bg-background text-muted-foreground hover:text-foreground hover:border-foreground/30"
															)}
														>
															{tier}
														</button>
													))}
												</div>
											</div>

											{/* Shift Coverage Selector */}
											<div className="space-y-2.5">
												<Label>Target Coverage Window</Label>
												<div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
													{COVERAGE_MODES.map((mode) => (
														<button
															key={mode}
															type="button"
															onClick={() => setCoverageMode(mode)}
															className={cn(
																"rounded-lg border px-3 py-2.5 text-xs font-medium transition-colors cursor-pointer",
																coverageMode === mode
																	? "border-forest bg-forest text-white dark:border-primary dark:bg-primary dark:text-primary-foreground"
																	: "border-border/75 bg-background text-muted-foreground hover:text-foreground hover:border-foreground/30"
															)}
														>
															{mode}
														</button>
													))}
												</div>
											</div>
										</>
									)}

									{/* Intent 2: Careers & Talent Fields */}
									{intent === "careers" && (
										<>
											<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
												<div className="space-y-2">
													<Label htmlFor="career-role">Target Role</Label>
													<select
														id="career-role"
														value={careerRole}
														onChange={(e) => setCareerRole(e.target.value)}
														className="h-11 w-full rounded-lg border border-border/80 bg-background px-3.5 text-sm text-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
													>
														{CAREER_ROLES.map((role) => (
															<option key={role} value={role}>
																{role}
															</option>
														))}
													</select>
												</div>

												<div className="space-y-2">
													<Label htmlFor="career-hub">Preferred Hub</Label>
													<select
														id="career-hub"
														value={careerHub}
														onChange={(e) => setCareerHub(e.target.value)}
														className="h-11 w-full rounded-lg border border-border/80 bg-background px-3.5 text-sm text-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
													>
														{CAREER_HUBS.map((hub) => (
															<option key={hub} value={hub}>
																{hub}
															</option>
														))}
													</select>
												</div>
											</div>

											<div className="space-y-2">
												<Label htmlFor="career-portfolio">
													LinkedIn Profile or Resume Link
												</Label>
												<Input
													id="career-portfolio"
													type="url"
													placeholder="https://linkedin.com/in/your-profile"
													value={portfolioUrl}
													onChange={(e) => setPortfolioUrl(e.target.value)}
													className="h-11 px-3.5 border-border/80 bg-background"
												/>
											</div>
										</>
									)}

									{/* Intent 3: General & Media Fields */}
									{intent === "general" && (
										<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
											<div className="space-y-2">
												<Label htmlFor="general-org">Organization</Label>
												<Input
													id="general-org"
													type="text"
													placeholder="Organization or publication"
													value={organization}
													onChange={(e) => setOrganization(e.target.value)}
													className="h-11 px-3.5 border-border/80 bg-background"
												/>
											</div>

											<div className="space-y-2">
												<Label htmlFor="general-topic">Inquiry Topic</Label>
												<select
													id="general-topic"
													value={topic}
													onChange={(e) => setTopic(e.target.value)}
													className="h-11 w-full rounded-lg border border-border/80 bg-background px-3.5 text-sm text-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
												>
													<option value="Executive Briefing">Executive Briefing</option>
													<option value="Compliance & Security Packet">Compliance &amp; Security Packet</option>
													<option value="Press & Media">Press &amp; Media</option>
													<option value="Strategic Partnership">Strategic Partnership</option>
												</select>
											</div>
										</div>
									)}

									{/* Message / Scope Notes */}
									<div className="space-y-2">
										<Label htmlFor="contact-notes">
											{intent === "proposal"
												? "Operational Scope & Target Go-Live Window"
												: intent === "careers"
													? "Experience Summary & Language Fluency"
													: "Message"}{" "}
											<span className="text-destructive">*</span>
										</Label>
										<Textarea
											id="contact-notes"
											rows={4}
											placeholder={
												intent === "proposal"
													? "Share monthly ticket volumes, target languages, or SLA objectives..."
													: intent === "careers"
														? "Highlight your years in BPO, technical support, QA auditing, or leadership..."
														: "How can our team assist you?"
											}
											value={notes}
											onChange={(e) => setNotes(e.target.value)}
											className="min-h-[116px] p-3.5 border-border/80 bg-background"
											required
										/>
									</div>

									{errorMessage && (
										<div
											role="alert"
											className="rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-2.5 text-xs font-medium text-destructive"
										>
											{errorMessage}
										</div>
									)}

									<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
										<p className="text-xs text-muted-foreground font-mono">
											NDA protection available on request before sharing ticket logs.
										</p>
										<button
											type="submit"
											disabled={isSubmitting}
											className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-xs transition-colors hover:bg-primary-hover active:translate-y-px disabled:opacity-60 cursor-pointer shrink-0"
										>
											<span>
												{isSubmitting
													? "Routing brief..."
													: intent === "proposal"
														? "Request Custom Proposal"
														: intent === "careers"
															? "Submit Candidate Profile"
															: "Send Message"}
											</span>
											<HugeiconsIcon
												icon={ArrowRight01Icon}
												strokeWidth={2}
												className="size-4"
											/>
										</button>
									</div>
								</form>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ContactFormSection;
