import { ILanguage } from "../../models/ILanguage";
import { ITranslationService } from "../../services/ITranslationService";

export interface ITranslationBarProps {
  supportedLanguages: ILanguage[];
  currentPageId: number;
  currentListId: string;
  currentWebUrl: string;
  translationService: ITranslationService;
}
