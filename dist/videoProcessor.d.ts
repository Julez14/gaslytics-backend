export interface ProcessingResult {
    success: boolean;
    videoId?: string;
    indexId?: string;
    analysisResult?: any;
    error?: string;
}
export interface ProgressCallback {
    (stage: string, progress: number, message?: string): void;
}
export declare const validateAnalysisData: (analysisData: any) => {
    isValid: boolean;
    error?: string;
    validatedData?: any;
};
export declare function processVideoWithTwelveLabs(videoUrl: string, progressCallback?: ProgressCallback): Promise<ProcessingResult>;
//# sourceMappingURL=videoProcessor.d.ts.map