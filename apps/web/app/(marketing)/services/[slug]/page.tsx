import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
	BPO_SERVICES_CATALOG,
	getServiceById,
	ServiceDetailView,
} from "@/components/marketing/services";

interface ServicePageProps {
	params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
	return BPO_SERVICES_CATALOG.map((service) => ({
		slug: service.id,
	}));
}

export async function generateMetadata({
	params,
}: ServicePageProps): Promise<Metadata> {
	const { slug } = await params;
	const service = getServiceById(slug);
	if (!service) {
		return { title: "Service Not Found | Aura BPO" };
	}
	return {
		title: `${service.title} | Aura BPO Services`,
		description: service.description,
	};
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
	const { slug } = await params;
	const currentIndex = BPO_SERVICES_CATALOG.findIndex((s) => s.id === slug);

	if (currentIndex === -1) {
		notFound();
	}

	const service = BPO_SERVICES_CATALOG[currentIndex]!;
	const prevIndex =
		(currentIndex - 1 + BPO_SERVICES_CATALOG.length) %
		BPO_SERVICES_CATALOG.length;
	const nextIndex = (currentIndex + 1) % BPO_SERVICES_CATALOG.length;

	return (
		<ServiceDetailView
			service={service}
			prevService={BPO_SERVICES_CATALOG[prevIndex]!}
			nextService={BPO_SERVICES_CATALOG[nextIndex]!}
		/>
	);
}
